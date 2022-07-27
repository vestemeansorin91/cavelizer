const {generateToken} = require('../../shared/middlewares/passport/token-generator');
const {StatusCodes} = require('http-status-codes');
const usersCollection = require('../user/user.schema');
const joi = require('joi');
const bcrypt = require('bcrypt');
const {sendEmail} = require('../../services/nodemailer.service');

module.exports = {
    register(request, response) {
        registerFn(request.body)
            .then(newUser => {
                response.write(JSON.stringify(newUser));
                response.end();
            })
            .catch(error => response.status(StatusCodes.BAD_REQUEST).send({message: error.message}));
    },
    login(request, response) {
        loginFn(request.body)
            .then(newUser => {
                response.write(JSON.stringify(newUser));
                response.end();
            })
            .catch(error => response.status(StatusCodes.BAD_REQUEST).send({message: error.message}));
    },
    forgotPassword(request, response) {
        forgotPasswordFn(request.body)
            .then(() => {
                response.write(JSON.stringify({}));
                response.end();
            })
            .catch(error => response.status(StatusCodes.BAD_REQUEST).send({message: error.message}));
    },
    resetPassword(request, response) {
        resetPasswordFn(request.body)
            .then(() => {
                response.write(JSON.stringify({}));
                response.end();
            })
            .catch(error => response.status(StatusCodes.BAD_REQUEST).send({message: error.message}));
    }
};

async function registerFn(userProps) {
    const userFound = await usersCollection.findOne({
        $or: [{username: userProps.username}, {email: userProps.email}]
    });

    if (userFound) throw new Error('Username or Email already exists');

    const validateSchema = joi.object().keys({
        username: joi.string().min(5).max(25).required(),
        fullName: joi.string().min(5).required(),
        password: joi.string().min(4).required(),
        confirmPassword: joi.any().valid(joi.ref('password')).required(),
        email: emailValidator,
        isActive: joi.optional(),
        isAdmin: joi.optional(),
        agreeTermsConditions: joi.boolean().truthy(),
        agreePolicyPrivacy: joi.boolean().truthy()
    });

    checkIfSchemaIsValid(validateSchema, userProps);

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(userProps.password, salt);

    const newUser = {
        ...userProps,
        salt,
        password: hashedPassword
    };

    await new usersCollection(newUser).save();
    return userProps;
}

async function loginFn(userProps) {
    const {username, password} = userProps;
    await validateUserPassword(username, password);

    const userWithCorrectCredentials = await usersCollection.findOne({username}).exec();

    if (!userWithCorrectCredentials) throw new Error('Username or Password incorrect!');

    const accessToken = generateToken(userWithCorrectCredentials.toObject());
    return {accessToken};
}

async function validateUserPassword(username, password) {
    const userFound = await usersCollection.findOne({username}).select('+password');

    if (userFound && (await bcrypt.compare(password, userFound.password))) {
        return userFound;
    }

    throw new Error('Password or User wrong!');
}

async function forgotPasswordFn(body) {
    const {emailOrUsername} = body;

    /* Check if user / email or username exists to send email */
    const userFound = await usersCollection.findOne({
        $or: [{username: emailOrUsername}, {email: emailOrUsername}]
    });

    if (!userFound) throw new Error(`Username or Password don't exists!`);

    /* Generate 6-digit code */
    const resetCode = Math.floor(100000 + Math.random() * 900000);

    /* Build E-mail template & Send email */
    const emailSubject = `[cavelizer] - Forgot Password: Reset code: ${resetCode}`;
    const emailHTML = `
        <h1 style="text-align: center">cavelizer</h1>
        
        <span style="text-align: center">Your reset code is: <strong>${resetCode}</strong></span>
    `;

    await sendEmail(userFound.email, emailSubject, emailHTML);

    /* Save reset code on user */
    await usersCollection.findByIdAndUpdate(userFound._id, {
        $set: {
            resetCode: resetCode
        }
    });

    /* Return SUCCESS */
    return {};
}

async function resetPasswordFn(body) {
    const {code, email, password} = body;

    /* Check if user / email exists */
    const userFound = await usersCollection.findOne({email}).select('+resetCode');
    if (!userFound) throw new Error(`Username or Password don't exists!`);

    if (code !== userFound.resetCode) {
        throw new Error(`Reset code is not correct!`);
    }

    /* Validators */
    const validateSchema = joi.object().keys({
        code: joi.string().length(6).required(),
        password: joi.string().min(4).required(),
        confirmPassword: joi.any().valid(joi.ref('password')).required(),
        email: emailValidator
    });

    checkIfSchemaIsValid(validateSchema, body);

    /* Generate new password / salt */
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    /* Save password / salt */
    await usersCollection
        .findByIdAndUpdate(userFound._id, {
            $set: {
                salt: salt,
                password: hashedPassword,
                resetCode: code
            }
        })
        .select('+password +salt +resetCode');

    /* Return SUCCESS */
    return null;
}

function checkIfSchemaIsValid(schema, body) {
    const {error} = schema.validate(body);
    if (error && error.details) throw new Error(error.details[0].message);

    return null;
}

function emailValidator() {
    return joi
        .string()
        .email()
        .regex(/@ethereal.email$/i)
        .required()
        .messages({
            'string.pattern.base': "Not an '@ethereal.email' mail"
        });
}

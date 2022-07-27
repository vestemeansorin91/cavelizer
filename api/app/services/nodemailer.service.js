const nodemailer = require('nodemailer');

const {NODEMAILER_HOST, NODEMAILER_EMAIL, NODEMAILER_PASSWORD} = process.env;

async function sendEmail(to, subject, html) {
    const transporter = buildTransporter();

    const info = await transporter.sendMail({
        from: NODEMAILER_EMAIL,
        to,
        subject,
        html
    });

    console.log('Email sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

function buildTransporter() {
    return nodemailer.createTransport({
        host: NODEMAILER_HOST,
        port: 587,
        secure: false,
        auth: {
            user: NODEMAILER_EMAIL,
            pass: NODEMAILER_PASSWORD
        }
    });
}

module.exports = {sendEmail};

/* - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - */

/* Database - Mongo/Mongoose setup */
/* Import Mongoose */
const mongoose = require("mongoose");

/* Set Mongo Promise */
mongoose.Promise = global.Promise;

/* Mongo Config */
// url: 'mongodb://localhost:27017/cavelizer',

/* Create connection to database */
mongoose.connect(url, (err) => {});

/* - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - */

/* Create a model / schema / object */
// filename structure: name.schema.js
const mongoose = require("mongoose");

const nameSchema = mongoose.Schema({});

const nameCollection = mongoose.model("Name", nameSchema);
module.exports = nameCollection;

/* - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - */

/* Endpoints setup into server.js */
const someRoutes = require("pathToFile");
app.use("/somePrefixHere", someRoutes);

// create new file for someRoutes, to folder routes
const express = require('express');
const router = express.Router();

const SomeController = require('pathToFile') // We don't have this yet , we create it below

module.exports = {
    router.get('/someExtraPathHere', SomeController.someFnHere); // ex. SomeController.getUsers
    router.post('/someExtraPathHere', SomeController.someFnHere); // ex. SomeController.createUser
    router.put('/someExtraPathHere', SomeController.someFnHere); // ex. SomeController.updateUser
    router.patch('/someExtraPathHere', SomeController.someFnHere); // ex. SomeController.toggleUserIsActive
    router.delete('/someExtraPathHere', SomeController.someFnHere); // ex. SomeController.deleteUser

    return router;
}

/* - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - */

/* Controller / logic for endpoints */
// create new file for SomeController, to folder controllers
module.exports = {
    getUsers(req,res) {
        // LOGIC HERE

        getUsers(params)
        .then()
        .catch(e => {
            // SOME ERROR HERE
        })
    }
}

function getUsers(params) {
    // LOGIC HERE THAT SHOULD RETURN A PROMISE / SOME ACTION TO DB

    return usersCollection.find({});
}
/_ Database - Mongo/Mongoose setup _/
/_ Import Mongoose _/
const mongoose = require("mongoose");

/_ Set Mongo Promise _/
mongoose.Promise = global.Promise;

/_ Mongo Config _/
// url: 'mongodb://localhost:27017/cavelizer',

/_ Create connection to database _/
mongoose.connect(url, (err) => {});

/_ Create a model / schema / object _/
// filename structure: name.schema.js
const mongoose = require("mongoose");

const nameSchema = mongoose.Schema({});

const nameCollection = mongoose.model("Name", nameSchema);
module.exports = nameCollection;

/_ Endpoints setup into server.js _/
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

/_ - - - - - - - - - - - - - - - - - - - - _/

/_ Controller / logic for endpoints _/
// create new file for SomeController, to folder controllers
module.exports = {
getUsers(request,response) {
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

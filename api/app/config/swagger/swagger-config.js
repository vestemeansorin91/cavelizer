const m2s = require("mongoose-to-swagger");

const userCollection = require("../../modules/user/user.schema");
const User = m2s(userCollection);

module.exports = {
  info: {
    title: "Cavelizer",
    description:
      "The purpose of the application is to cover a wide range of passions that we have as a team that we formed at ReCODEnized.",
  },
  basePath: "/api",
  host: "",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  definitions: {
    User,
  },
};

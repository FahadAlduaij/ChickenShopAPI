const { model, Schema } = require("mongoose");

const UserSchema = Schema({
	username: { type: String },
	password: String,
	firstName: String,
	lastName: String,
	email: String,
	image: String,
});

module.exports = model("User", UserSchema);

const bcrypt = require("bcrypt");
const { User } = require("../Models/user.schema");

const addOwner = (password, name, email) => {
 //* const hasedPw = bcrypt.hash();
 bcrypt.hash(password, 10)
  .then((data) => {
   User.create({
    name,
    email,
    password: data,
    role: "owner"
   })
  })
}

module.exports = {addOwner};
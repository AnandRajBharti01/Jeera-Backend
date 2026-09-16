require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { addOwner } = require("./Utlis/AddOwner");
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']); 




mongoose.connect(process.env.DB_URL)
 .then(() => {
  console.log("DataBase Connected");

  // User.create()
  addOwner("hellljiSecondSecondOwner", "bharti", "bihar@anand.com")
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
   console.log(`Server Running On Port ${PORT}`);
  })
 })
 .catch((error)=>{
  console.log(`DB Connection faild :${error.message}`)
})

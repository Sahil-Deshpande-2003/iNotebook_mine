const express = require("express");
const JWT_SECRET = "This is a secret";
const jwt = require("jsonwebtoken");
const fetchUserID = (req, res, next) => {
  // using auth token and JWT SECRET u can fetch user's data which has user's id

  try {
    const token = req.header("auth-token");

    if (!token) {
      return res
        .status(400)
        .json({ errors: "Please authenciate using a valid token" });
    }

    
    const data = jwt.verify(token, JWT_SECRET);
    
    req.user = data.user; // so that u can access its id in other components as well
    
    next();
    console.log("I am here")
  } catch (error) {
    return res.status(400).json({ errors: error.message });
  }
};

module.exports = fetchUserID;

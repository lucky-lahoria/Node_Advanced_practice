const sequelize = require("../models").sequelize;
const moment = require("moment");
const models = require("../models");

const UserDetails = models.User;

const { Op, json } = require("sequelize");

exports.add = async (req, res, next) => {
  try {
    let parmas = req.body;
    let ReqData = {
        firstname:parmas.name,
        lastname: parmas.name,
        email: parmas.email,
        username:parmas.username,
        password: parmas.username,
        phone: parmas.phone
    }
    console.log(ReqData,"req data")
  } 
  catch (err) {

  }
};

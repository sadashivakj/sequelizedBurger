// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("./connection.js");

// ORM
// =============================================================

var tableName = "burgers";

var orm = {

  selectAll: function(callback) {
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {
      if(err) throw err;
      callback(result);
    });
  },

  insertOne: function(burger_name, callback) {
    var s = "INSERT INTO " + tableName + " (burger_name) VALUES (?)";
    connection.query(s, [burger_name], function(err, result) {
      if(err) throw err;
      callback(result);
    });
  },

  updateOne: function(devouredFlag, burgerId, callback) {
    var s = "UPDATE " + tableName + " SET devoured = "+devouredFlag+ " WHERE id = " +burgerId;
    connection.query(s, function(err, result){
      if(err) throw err;
      callback(result);
    });
  }
};

module.exports = orm;
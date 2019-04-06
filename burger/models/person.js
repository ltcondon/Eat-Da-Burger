// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var person = {
  selectAll: function(cb) {
    orm.selectAll("people", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("people", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("people", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller:
module.exports = person;

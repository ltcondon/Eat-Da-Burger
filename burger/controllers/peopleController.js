var express = require("express");

var app = express();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/person.js");

// Create all our routes and set up logic within those routes where required.
app.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

app.post("/api/people", function(req, res) {
  cat.create(["name", "alive"], [req.body.name, req.body.alive], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

app.put("/api/people/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update(
    {
      sleepy: req.body.sleepy
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;

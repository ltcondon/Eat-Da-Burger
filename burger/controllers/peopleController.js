var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var person = require("../models/person.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  person.selectAll(function(data) {
    var hbsObject = {
      people: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});



router.post("/api/people", function(req, res) {
  person.insertOne(["name", "alive"], [req.body.name, req.body.alive], function(result) {
    res.json({ id: result.insertId });
  });
});


router.put("/api/people", function(req, res) {
  var condition = "id = " + req.body.id;

  console.log("condition", condition);

  person.updateOne(
    {
      alive: req.body.alive
    },
    condition,
    function(result) {
      console.log(result);

      if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// // Export routes for server.js to use.
module.exports = router;

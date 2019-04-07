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

// router.post("/api/people", function(req, res) {
//   cat.create(["name", "alive"], [req.body.name, req.body.alive], function(result) {
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/people/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   person.update(
//     {
//       alive: req.body.alive
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });

// // Export routes for server.js to use.
module.exports = router;

var express = require("express");
var db = require("../models");

var router = express.Router();

router.get("/", function(getReq, getRes){
	db.SequelizeBurger.findAll({}).then(function(dbBurger) {
		var hbsObject = { burgers: dbBurger};
		getRes.render("index", hbsObject);
	});
});

router.post("/", function(postReq, postRes){
	db.SequelizeBurger.create({
		burger_name: postReq.body.newBurger
	}).then(function(){
		postRes.redirect("/");
	});
});

router.put("/:id", function(putReq, putRes){
	db.SequelizeBurger.update({
      devoured: putReq.body.devoured
    }, {
      where: {
        id: putReq.params.id
      }
    }).then(function() {
      putRes.redirect("/");
    });
});

module.exports = router;
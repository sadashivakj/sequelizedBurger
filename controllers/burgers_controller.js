var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(getReq, getRes){
	burger.selectAll(function(data){
		var hbsObject = { burgers: data};
		getRes.render("index", hbsObject);
	});
});

router.post("/", function(postReq, postRes){
	var burger_name = postReq.body.newBurger;
	burger.insertOne(burger_name, function(){
		postRes.redirect("/");
	});
});

router.put("/:id", function(putReq, putRes){
	var selectedId = putReq.params.id;
	var devoured = putReq.body.devoured;
	burger.updateOne(devoured, selectedId, function(){
		putRes.redirect("/");
	});
});

module.exports = router;


var orm = require("../config/orm.js");

var burger = {
	selectAll: function(callback){
		orm.selectAll(function(result){
			callback(result);
		});
	}, 
	insertOne: function(burger_name, callback){
		orm.insertOne(burger_name, function(){
			callback();
		});
	},
	updateOne: function(devouredFlag, burgerId, callback){
		orm.updateOne(devouredFlag, burgerId, function(){
			callback();
		});
	}
}; 

module.exports = burger;
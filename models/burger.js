
module.exports = function(sequelize, DataTypes){
	return sequelize.define("SequelizeBurger", {
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});
}
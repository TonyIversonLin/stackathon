var Sequelize = require('sequelize');
var db = require('../_db');

var ImageDb = db.define('imageDb', {
	dish: Sequelize.STRING,
	name: Sequelize.STRING,
	category: Sequelize.STRING,
	score: Sequelize.INTEGER,
	comment: Sequelize.TEXT,
	wentCount: Sequelize.INTEGER,
	goingCount: Sequelize.INTEGER,
	url: Sequelize.STRING,
	lat: Sequelize.STRING,
	long: Sequelize.STRING
});

module.exports = ImageDb;
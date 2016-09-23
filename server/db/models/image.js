var Sequelize = require('sequelize');
var db = require('../_db');

var ImageDb = db.define('imageDb', {
	dish: Sequelize.STRING,
	name: Sequelize.STRING,
	category: Sequelize.STRING,
	score: Sequelize.INTEGER,
	comment: Sequelize.TEXT,
	Url: Sequelize.STRING
});

module.exports = ImageDb;
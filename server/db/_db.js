var Sequelize = require('sequelize');

let DATABASE_URI;
if(process.env.NODE_ENV==='production') {
	DATABASE_URI = process.env.DATABASE_URI;
}else{
	DATABASE_URI = 'postgres://localhost:5432/flashcards';
}

var db = new Sequelize(DATABASE_URI, { logging: false });

module.exports = db;

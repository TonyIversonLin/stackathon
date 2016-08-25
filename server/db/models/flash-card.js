var Sequelize = require('sequelize');
var db = require('../_db');

var FlashCard = db.define('flashcard', {

  question: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  category: {
    type: Sequelize.ENUM('SQL', 'Express', 'Angular', 'Node'),
    allowNull: false
  },
  answers: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
    // Transforming the data to have the same structure as the old (Mongoose)
    // version of this workshop:
    get: function () {
      return this.getDataValue('answers')
      .map((answer, i) => {
        return {text: answer, correct: i === this.getDataValue('correct')}
      })
    },
    // handling the transformation back into our SQL model
    set: function (answerObjects) {
      const correctIndex = answerObjects.findIndex(answer => answer.correct);
      this.setDataValue('correct', correctIndex);
      const answerStrings = answerObjects.map(answer => answer.text);
      this.setDataValue('answers', answerStrings);
    }
  },
  correct: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    },
    get: () => undefined // Hides this attribute from the client
  }

}, {

  timestamps: false

});

module.exports = FlashCard;

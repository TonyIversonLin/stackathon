var chalk = require('chalk');
var db = require('./server/db');
var FlashCard = db.model('flashcard');
var Bluebird = require('bluebird');

var cards = [
  {
    question: 'What is another word for "asking the database for information"?',
    category: 'SQL',
    answers: ['Query', 'Find', 'Search'],
    correct: 0
  }, {
    question: 'What is a schema?',
    category: 'SQL',
    answers: ['A SQL table', 'A way to execute a query with Sequelize', 'A description of a row in SQL'],
    correct: 2
  }, {
    question: 'Which of the following is NOT a valid Sequelize schema type?',
    category: 'SQL',
    answers: ['String', 'Row', 'Date'],
    correct: 1
  }, {
    question: 'A Sequelize model must be created with…',
    category: 'SQL',
    answers: ['a schema', 'a row', 'another model'],
    correct: 0
  }, {
    question: 'Express is…',
    category: 'Express',
    answers: ['a tool for handling HTTP requests', 'a tool for accessing a SQL database', 'a tool for generating HTML based on data'],
    correct: 0
  }, {
    question: 'Which of these is NOT an HTTP verb?',
    category: 'Express',
    answers: ['GET', 'POST', 'PULL'],
    correct: 2
  }, {
    question: 'What is a router?',
    category: 'Express',
    answers: ['A component that maps a URL to a handler function', 'Middleware that attaches helpful data to a request object', 'A component that parses out important data given in the request'],
    correct: 0
  }, {
    question: 'You can access the query parameters of a GET request by using…',
    category: 'Express',
    answers: ['req.body', 'req.params', 'req.query'],
    correct: 2
  }, {
    question: 'Angular is a front-end framework, which means it is for programs…',
    category: 'Angular',
    answers: ['on a server', 'in a browser', 'both'],
    correct: 1
  }, {
    question: 'The fancy word for Angular template curly braces {{ }} is…',
    category: 'Angular',
    answers: ['transclusion', 'interpolation', 'emulation'],
    correct: 1
  }, {
    question: 'Modules in Angular can be built using…',
    category: 'Angular',
    answers: ['factories', 'templates', 'controllers'],
    correct: 0
  }, {
    question: 'In Angular, $scope is a…',
    category: 'Angular',
    answers: ['mysterious being', 'relic of transcendance', 'plain old Javascript object'],
    correct: 2
  }, {
    question: 'Node is a great tool for writing Javascript to build…',
    category: 'Node',
    answers: ['servers', 'machine processes', 'both'],
    correct: 2
  }, {
    question: '.then makes you think of…',
    category: 'Node',
    answers: ['promises', 'callbacks', 'modules'],
    correct: 0
  }, {
    question: "What is the name of Node's default module system?",
    category: 'Node',
    answers: ['AMD', 'CommonJS', 'SystemJS'],
    correct: 1
  }, {
    question: 'What keyword is used to grab a module in Node?',
    category: 'Node',
    answers: ['module', 'exports', 'require'],
    correct: 2
  }
];

function seedCards () {
  return Bluebird.map(cards, function (card) {
    return FlashCard.create(card);
  });
}

db.sync({ force: true })
.then(seedCards)
.then(function () {
  console.log(chalk.green('Seed successful'));
})
.catch(function (err) {
  console.error(err);
})
.finally(function () {
  db.close(); // else, connection held ~10 secs. Does not return a promise.
  return null; // silences Bluebird re: unreturned promise in handler.
});

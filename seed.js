var chalk = require('chalk');
var db = require('./server/db');
var FlashCard = db.model('flashcard');
var Bluebird = require('bluebird');

var cards = [
  {
    question: 'What is another word for "asking the database for information"?',
    category: 'SQL',
    answers: [{
      text: 'Query',
      correct: true
    }, {
      text:'Find'
    }, {
      text: 'Search'
    }]
  }, {
    question: 'What is a schema?',
    category: 'SQL',
    answers: [{
      text: 'A SQL table'
    }, {
      text: 'A way to execute a query with Sequelize'
    }, {
      text: 'A description of a row in SQL',
      correct: true
    }]
  }, {
    question: 'Which of the following is NOT a valid Sequelize schema type?',
    category: 'SQL',
    answers: [{
      text: 'String'
    }, {
      text: 'Row',
      correct: true
    }, {
      text: 'Date'
    }]
  }, {
    question: 'A Sequelize model must be created with…',
    category: 'SQL',
    answers: [{
      text: 'a schema',
      correct: true
    }, {
      text: 'a row'
    }, {
      text: 'another model'
    }]
  }, {
    question: 'Express is…',
    category: 'Express',
    answers: [{
      text: 'a tool for handling HTTP requests',
      correct: true
    }, {
      text: 'a tool for accessing a SQL database'
    }, {
      text: 'a tool for generating HTML based on data'
    }]
  }, {
    question: 'Which of these is NOT an HTTP verb?',
    category: 'Express',
    answers: [{
      text: 'GET'
    }, {
      text: 'POST'
    }, {
      text: 'PULL',
      correct: true
    }]
  }, {
    question: 'What is a router?',
    category: 'Express',
    answers: [{
      text: 'A component that maps a URL to a handler function',
      correct: true
    }, {
      text: 'Middleware that attaches helpful data to a request object'
    }, {
      text: 'A component that parses out important data given in the request'
    }]
  }, {
    question: 'You can access the query parameters of a GET request by using…',
    category: 'Express',
    answers: [{
      text: 'req.body'
    }, {
      text: 'req.params'
    }, {
      text: 'req.query',
      correct: true
    }]
  }, {
    question: 'Angular is a front-end framework, which means it is for programs…',
    category: 'Angular',
    answers: [{
      text: 'on a server'
    }, {
      text: 'in a browser',
      correct: true
    }, {
      text: 'both'
    }]
  }, {
    question: 'The fancy word for Angular template curly braces {{ }} is…',
    category: 'Angular',
    answers: [{
      text: 'transclusion'
    }, {
      text: 'interpolation',
      correct: true
    }, {
      text: 'emulation'
    }]
  }, {
    question: 'Modules in Angular can be built using…',
    category: 'Angular',
    answers: [{
      text: 'factories',
      correct: true
    }, {
      text: 'templates'
    }, {
      text: 'controllers'
    }]
  }, {
    question: 'In Angular, $scope is a…',
    category: 'Angular',
    answers: [{
      text: 'mysterious being'
    }, {
      text: 'relic of transcendance'
    }, {
      text: 'plain old Javascript object',
      correct: true
    }]
  }, {
    question: 'Node is a great tool for writing Javascript to build…',
    category: 'Node',
    answers: [{
      text: 'servers'
    }, {
      text: 'machine processes'
    }, {
      text: 'both',
      correct: true
    }]
  }, {
    question: '.then makes you think of…',
    category: 'Node',
    answers: [{
      text: 'promises',
      correct: true
    }, {
      text: 'callbacks'
    }, {
      text: 'modules'
    }]
  }, {
    question: "What is the name of Node's default module system?",
    category: 'Node',
    answers: [{
      text: 'AMD'
    }, {
      text: 'CommonJS',
      correct: true
    }, {
      text: 'SystemJS'
    }]
  }, {
    question: 'What keyword is used to grab a module in Node?',
    category: 'Node',
    answers: [{
      text: 'module'
    }, {
      text: 'exports'
    }, {
      text: 'require',
      correct: 2
    }]
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

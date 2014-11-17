'use strict';

var fs = require('fs');

var team = require('./teams.js');
var player = require('./players.js');

fs.appendFile(('teams/' + team()), (player() + '\n'), function(err) {
  if (err) throw err;
  console.log('written');
});

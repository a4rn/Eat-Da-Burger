var express = require('express');
var router = require('router');
var burger = require('./models/burger.js');

//root get route
app.get('/', function(req, res) {

  // connection.query('SELECT * FROM events;', function(err, data) {
  //   if (err) throw err;

  //test it
  //console.log('The solution is: ', data);

  //test it
  //res.send(data);

  res.render('index');
});
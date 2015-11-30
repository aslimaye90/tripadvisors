var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userSchema = require('../models/users.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/*GET all usernames*/
router.get('/usernames', function(req,res){
	userSchema.find(
		{},
		{"userName":1},
		{},
		function(err,data){
			if(err){
				res.send(err);
				return;
			}
			res.json(data);
		}
	);
});

/*GET full document of a user*/
router.get('/:userName', function(req,res){
	userSchema.findOne(
		{"userName": req.params.userName},
		{},
		{},
		function(err,data){
			if(err){
				res.send(err);
				return;
			}
			res.json(data);
		}
	);
});

module.exports = router;

'use strict';

/**
 * Module dependencies.
 */
var userModel = require('../models/user.model.js');

//数据重组
function arrFn(arrs) {
	var arr = [];
	for (var i = 0; i < arrs.length; i++) {
		if (arrs[i] != undefined) {
			arr.push(arrs[i]);
		}
	}
	return arr;
}


/**
 * List of users
 */
exports.list = function(req, res) {
	userModel.find(function(err, users) {
		if (err) {
			return res.status(400).send({
				message: 'something error'
			});
		} else {
			res.send(arrFn(users));
		}
	});
};

exports.read = function(req, res) {
	userModel.find(function(err, users) {
		if (err) {
			return res.status(400).send({
				message: 'something error'
			});
		} else {
			res.send(arrFn(users)[req.param('id')]);
		}
	});
};


exports.delete = function(req, res) {

	userModel.find(function(err, users) {
		if (err) {
			return res.status(400).send({
				message: 'something error'
			});
		} else {

			users.splice(req.param('id'), 1);

			res.send(arrFn(users));
		}
	});

};


exports.update = function(req, res) {

	userModel.find(function(err, users) {
		if (err) {
			return res.status(400).send({
				message: 'something error'
			});
		} else {
			if (req.body.name) {
				users[req.param('id')].name = req.body.name;
			}
			if (req.body.age) {
				users[req.param('id')].age = req.body.age;
			}
			res.send(users);
			console.log(req.body);
		}
	});
};


exports.create = function(req, res) {

	userModel.find(function(err, users) {
		if (err) {
			return res.status(400).send({
				message: 'something error'
			});
		} else {
			if (req.body.name && req.body.age) {
				users.push(req.body)
			}
			res.send(users);
			console.log(req.body);
		}
	});
};
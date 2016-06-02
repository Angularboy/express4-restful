'use strict';

/**
 * Module dependencies.
 */
var usersController = require('../controllers/users.controller');

module.exports = function(app) {
	// User Routes
	app.route('/api')
		.get(usersController.list)
		.post(usersController.create);
	app.route('/api/:id')
		.get(usersController.read)
		.put(usersController.update)
		.delete(usersController.delete);

};
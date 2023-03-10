var Book = require('../models/book');

exports.dbtest = function(req, res) {
	Book.countDocuments({}, function (err, count) {
		console.log('%d', count);
		res.render('dbtest', { title: 'dbtest', count: count });
	});
	
	
};


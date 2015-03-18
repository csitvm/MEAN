
/*
 * GET home page.
 */

exports.showMessage = function(req, res){
  res.render('hello', { title: req.params.who, placename: req.params.place });
};
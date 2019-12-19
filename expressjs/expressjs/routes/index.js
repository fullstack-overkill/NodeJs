var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

router.post('/', function(req, res){
  res.send('Hello World!');
});

router.put('/', function (req, res) {
  res.send('Got a PUT request at /');
});

router.delete('/', function (req, res) {
  res.send('Goa a DELETE request at /');
});

module.exports = router;

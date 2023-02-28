var express = require('express');
var path = require('path');
var router = express.Router();
const basePath = path.join(__dirname.replace('routes', 'public'));  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ye Rant Site'});
});

router.get('/whoisye', function(req, res, next){
  res.render('whoisye');
});

router.get('/about', function(req, res, next){
  res.render('about');
});

/* IMAGES */
router.get('/public/images/kanye-stare.gif', function(req, res, next) {
  res.sendFile(path.join(basePath, '/images/kanye-stare.gif'));
});

router.get('/public/images/kayne-microphone.jpeg', function(req, res, next) {
  res.sendFile(path.join(basePath, '/images/kayne-microphone.jpeg'));
});
/* IMAGES */

/* JS AND CSS */
router.get('/public/javascripts/controller.js', function(req, res, next) {
  res.sendFile(path.join(basePath, '/javascripts/controller.js'));
});

router.get('/public/javascripts/navbarController.js', function(req, res, next) {
  res.sendFile(path.join(basePath, '/javascripts/navbarController.js'));
});
/* JS AND CSS */


/* AUDIO */
router.get('/public/audio/look-at-this-dude.mp3', function(req, res, next) {
  res.sendFile(path.join(basePath, '/audio/look-at-this-dude.mp3'));
});

router.get('/public/audio/mission-failed.mp3', function(req, res, next) {
  res.sendFile('../public/audio/mission-failed.mp3');
});
/* AUDIO */

module.exports = router;

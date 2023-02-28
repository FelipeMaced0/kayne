var express = require('express');
var router = express.Router();

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
  res.sendFile('../public/images/kanye-stare.gif');
});

router.get('/public/images/kayne-microphone.jpeg', function(req, res, next) {
  res.sendFile('../public/images/kayne-microphone.jpeg');
});
/* IMAGES */

/* JS AND CSS */
router.get('/public/javascripts/controller.js', function(req, res, next) {
  res.sendFile('../public/javascripts/controller.js');
});

router.get('/public/javascripts/navbarController.js', function(req, res, next) {
  res.sendFile('../public/javascripts/navbarController.js');
});
/* JS AND CSS */


/* AUDIO */
router.get('/public/audio/look-at-this-dude.mp3', function(req, res, next) {
  res.sendFile('../public/audio/look-at-this-dude.mp3');
});

router.get('/public/audio/mission-failed.mp3', function(req, res, next) {
  res.sendFile('../public/audio/mission-failed.mp3');
});
/* AUDIO */

module.exports = router;

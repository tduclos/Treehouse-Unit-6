//declarations
const express = require('express');
const router = express.Router();
const { data } = require('../data/Data.json');
const { projects } = data;

//index page
router.get('/', (req, res) => {
    res.render('index', {projects});
});

//about page
router.get('/about', (req, res) => {
    res.render('about');
});

//export routes
module.exports = router;
//declarations
const express = require('express');
const router = express.Router();
const { data } = require('../data/data.json');
const { projects } = data;


//display random project
router.get('/', (req, res) => {
    const numberOfProjects = projects.length;
    const randomProject = Math.floor(Math.random() * numberOfProjects);
    res.redirect(`/project/${randomProject}`);
});

//display  project by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const project = projects[id];

    res.render('project', { project });
});

//export routes
module.exports = router;
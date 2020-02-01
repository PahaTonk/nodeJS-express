const {Router} = require('express');
const Course = require('./../models/course');
const router = new Router();

router.get('/', async (req, res) => {
    const courses = await Course.getAll();

    res.render('courses', {
        title: 'Courses page',
        isCourses: true,
        courses
    }); 
});

module.exports = router;
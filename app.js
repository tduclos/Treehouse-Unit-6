//middleware setup

const express = require('express');

const app = express();
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

//routing

const mainRoutes = require('./routes');
const projectRoute = require('./routes/project.js');

app.use(mainRoutes);
app.use('/project', projectRoute);

//error handling

app.use((req,res,next) =>{
	const err = new Error ('Not Found!');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next)=>{
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
});

app.listen(3000, () => {
    console.log('The application is running on localhost: 3000');
});
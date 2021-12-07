'use strict';
require('dotenv').config();
const express = require('express');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const passport = require('./utils/pass.js');
const { httpError } = require('./utils/errors');


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('./uploads'));

app.use(passport.initialize());

app.use('/auth', authRoute);

app.use('/cat', catRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);
app.use('/thumbnails', express.static('thumbnails'));

app.use((req, res, next)=> {
    const err = httpError('Not found', 404);
    next(err);
});
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    .json({
        message: err.message || 'internal server horror', 
       });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

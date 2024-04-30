const express = require('express');
const router = require('./routes/router');
const connectToDb = require('./config/connectDb');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api/v1', router);

connectToDb().then(() => {
    app.listen(3000, (err) => {
        // console.log(err)
        console.log('server is running at 3000')
    })
})
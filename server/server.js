const express = require('express');
const app = express();
require('dotenv').config();
const logger = require('morgan');

// global declarations
const PORT = process.env.PORT || 5000;



app.use(logger('tiny'));

// routes
app.get('/v1/server', (req,res) => {
    res.json({message: "Welcome to the lazytask server"});
})

app.listen(PORT, () => {
    console.log(`SERVER STARTED AT PORT ${PORT}`)
})






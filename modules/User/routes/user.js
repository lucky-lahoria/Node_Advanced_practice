const app = require('express').Router();

app.route('/').get((req,res,next)=>{
    res.send('hello')
})

module.exports = app;
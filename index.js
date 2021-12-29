const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const path = require('path');
const redditData = require('./data.json')

console.log(redditData);

app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/r/:subreddit',(req,res)=>{
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    // console.log(data);
    if(data){
    res.render('subreddit',{ ...data });
    } else{
        res.render('not found',{ subreddit });
    }
    //passing the data as an object
    // this will allow to access the individual properties of the object
    // console.log(data.posts);
})
app.listen('3000',()=>{
    console.log('LISTENING ON PORT 3000');
})
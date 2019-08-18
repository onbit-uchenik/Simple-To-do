const express = require('express');
const bodyParser = require('body-parser');
const localdb = require('lib/localdb.js');
const taskRouter = express.Router();

const db = new localdb();

taskRouter.use(bodyParser.json());
taskRouter.use(bodyParser.urlencoded({extended:true}));

taskRouter.route('/')
.all( (req,res,next)=>{
    res.statusCode  = 200;
    res.setHeader('Content-Type','application/json');
    next();
})
.get( (req,res,next) => {
    res.end(JSON.stringify(db.queryAll()));
})
.post ( (req,res,next) => {
    db.insert(req.body);
    res.end(JSON.stringify(req.body));
})
.put( (req,res,next) => {
    res.statusCode = 403;
    res.end(JSON.stringify({"message" : "invalid request"}));
})
.delete( (req,res,next) => {
    db.removeAll();
    res.end(JSON.stringify({"message":"operation successful"}));
});

taskRouter.route('/:taskId')
.all( (req,res,next)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    next()
})
.get( (req,res,next)=>{
    console.log(req.params.taskId);
    console.log(db.query(req.params.taskId));
    res.end(JSON.stringify(db.query(req.params.taskId)));
})
.post( (req,res,next) => {
    res.statusCode = 403;
    res.end(JSON.stringify({"message" : "invalid request"}));

})
.put( (req,res,next) => {
    db.update(req.body);
    res.end(JSON.stringify(req.body));
})
.delete( (req,res,next) => {
    db.remove(req.params.taskId);
    res.end(JSON.stringify(req.body));
});



module.exports = taskRouter;   
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const taskRouter = require('./routes/taskRouter');

const hostname = 'localhost';
const port = 3000;
app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/task',taskRouter);

app.use('/task/:taskId',taskRouter);
 

app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}`);
});

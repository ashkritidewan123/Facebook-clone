const express = require('express');
const app = express();
const port = 3000;
const db = require('./database/connection');
let userrouter = require('./routes/user');
let postrouter = require('./routes/post');
let chatrouter = require('./routes/chat');

app.use(express.json());
app.listen(port,()=>{});
app.use('/', userrouter);
app.use('/', postrouter);
app.use('/', chatrouter);
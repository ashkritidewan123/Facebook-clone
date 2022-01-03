const express = require('express');
const profilemodel=require('./model/userprofile')

const database=require('./database/connection')
const port = 4000;
const app=express();
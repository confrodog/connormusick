/*
*   Main file for the project, most middleware will flow through here before
*   reaching any route
*/

const express = require('express');
const app = express();

const cors = require('cors');

// MIDDLEWARE
app.use(express.json());
app.use(cors());

app.listen(5000,()=>{
    console.log('listening on port 5000');
});
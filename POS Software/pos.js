
const express = require("express");
const path = require('path');
const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index"); // index refers to index.ejs
   });

app.listen(3036, () => {
  console.log("POS Software Started Successfully");
});


const { exec } = require("child_process");

exec("npm start", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

const open = require('open');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// specify the app to open in 
sleep(5000).then(() => {open('http://127.0.0.1:3036', {app: 'chrome'});});
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index"); // index refers to index.ejs
   });




app.post("/login", (req, res) => {
    const { name, password } = req.body;
  
    if (name === "admin" && password === "admin") {
      res.render("success", {
        username: name,
      });
    } else {
      res.render("failure");
    }
  });

  
app.listen(3000, () => {
    console.log("server started on port 3000");
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

// // opens the url in the default browser 
// open('http://sindresorhus.com');
 
// specify the app to open in 
open('http://127.0.0.1:3000', {app: 'chrome'});
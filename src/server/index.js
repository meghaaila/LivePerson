const express = require('express');
const os = require('os');

const app = express(),
  bodyParser = require("body-parser");

app.use(express.static('dist'));
app.use(bodyParser.json());
const contactUser = [];
app.get('/api/getUsername', (req, res) => res.send({ username: "ABC" }));

app.post('/api/contactus', (req, res) => {
  const user = req.body.user;
  contactUser.push(user);
  res.json("user addedd");
});

app.post('/api/login', (req, res) => {
  const loginUser =req.body;
  if(loginUser.email ==  "abc@abc.com" && loginUser.password == "Abc123")
    res.json("successful")
  else
  res.json("failed");
});


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

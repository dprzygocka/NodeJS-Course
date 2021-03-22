const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/home.html")
});

app.get("/basic_rules", (req,res) => {
    res.sendFile(__dirname + "/public/basic_rules/basic_rules.html")
});

app.get("/strict_mode", (req,res) => {
    res.sendFile(__dirname + "/public/strict_mode/strict_mode.html")
});

app.get("/scope", (req,res) => {
    res.sendFile(__dirname + "/public/scope/scope.html")
});

app.get("/hoisting", (req,res) => {
    res.sendFile(__dirname + "/public/hoisting/hoisting.html")
});

app.get("/strings", (req,res) => {
    res.sendFile(__dirname + "/public/strings/strings.html")
});

app.get("/numbers", (req,res) => {
    res.sendFile(__dirname + "/public/numbers/numbers.html")
});

app.get("/objects", (req,res) => {
    res.sendFile(__dirname + "/public/objects/objects.html")
});

app.get("/functions", (req,res) => {
    res.sendFile(__dirname + "/public/functions/functions.html")
});

app.get("/arrays", (req,res) => {
    res.sendFile(__dirname + "/public/arrays/arrays.html")
});

app.get("/CRUD_REST_API", (req,res) => {
    res.sendFile(__dirname + "/public/CRUD_REST_API/CRUD_REST_API.html")
});

app.get("/create_run", (req,res) => {
    res.sendFile(__dirname + "/public/create_run/create_run.html")
});


const PORT = process.env.PORT || 8080;
console.log("server is running on port:", PORT);
app.listen(PORT, error => error ? console.log(error) : "Server is running on: ", PORT);
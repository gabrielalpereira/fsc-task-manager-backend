//Biblioteca
const express = require("express");
const dotenv = require("dotenv");

//Arquivo
const connectToDataBase = require("./src/database/mongoose.database");

dotenv.config();
const app = express();

connectToDataBase();

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

//JSON
app.get("/tasks", (req, res) => {
    const tasks = [{ description: "Estudar programação", isCompleted: false }];
    res.status(200).send(tasks);
});

// Servidor local
app.listen(8000, () => console.log("Listening on port 8000!"));

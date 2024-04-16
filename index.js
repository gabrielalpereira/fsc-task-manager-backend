//Biblioteca
const express = require("express");
const dotenv = require("dotenv");
const TaskRouter = require("./src/routes/task.routes");
const cors = require("cors");

//Arquivo
const connectToDataBase = require("./src/database/mongoose.database");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectToDataBase();

app.use("/tasks", TaskRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));

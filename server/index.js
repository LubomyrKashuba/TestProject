const express = require("express");
const mongoose = require("mongoose");
const appRouter = require("./appRouter")
const cors = require('cors')

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cors())
app.use('/', appRouter)


const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://TestProject:qwerty123@cluster0.fqzd7mn.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start()

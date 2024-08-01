const express = require("express");
const dataRoute = require("./routes/data");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3030;

app.use("/data", dataRoute);

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));

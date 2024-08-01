const express = require("express");
const notFoundHandler = require("./middlewares/errorHandler");
const dataRoute = require("./routes/data");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3030;

app.use("/api/data", dataRoute);

app.use(notFoundHandler);

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));

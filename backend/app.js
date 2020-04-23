const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const router = require("./routes/routes");
app.use("/", router);
app.listen(8080, function() {
  console.log("App listening at 8080");
});

let express = require("express");
let router = express.Router();

const downloadHandler = require("../handlers/getFile");

router.get("/api/:filename", downloadHandler.getFile);

module.exports = router;

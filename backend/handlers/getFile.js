const Responses = require("../responses/file_api");
const S3 = require("../S3");
const fs = require("fs");
const stream = require("stream");
const env = require("dotenv").config();
const FileSaver = require("file-saver");
const axios = require("axios");
//
const bucket = process.env.bucketName;
const name = process.env.name;

module.exports.getFile = async (req, res, event) => {
  console.log(req.params.filename);
  if (!req.params || !req.params.filename) {
    return res
      .status(400)
      .send({ message: "missing the fileName from the path" });
  }

  let fileName = req.params.filename;

  const file = await S3.get(fileName, bucket).catch(err => {
    console.log("error in S3 get", err);
    return null;
  });

  console.log(file);
  if (!file) {
    return res.status(400).send({
      message: "Failed to read data by filename",
      input: bucket || "null",
      someElse: "hello",
      name: name
    });
  }
  res.body = file;
  res.status(200).send(file.Body);
  // file.pipe(res());
  // return Responses._200({ file: file.Body });
};

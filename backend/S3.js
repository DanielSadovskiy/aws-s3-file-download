const AWS = require("aws-sdk");
const download = require("./helpers/download");

const s3Client = new AWS.S3();

const S3 = {
  async get(fileName, bucket) {
    const params = {
      Bucket: bucket,
      Key: fileName
    };

    let data = await s3Client.getObject(params).promise();
    if (!data) {
      throw Error(`Failed to get file ${fileName}, from ${bucket}`);
    }
    return data;
  },
  async write(data, fileName, bucket) {
    const params = {
      Bucket: bucket,
      Body: JSON.stringify(data),
      Key: fileName
    };

    const newData = await s3Client.putObject(params).promise();

    if (!newData) {
      throw Error("there was an error writing the file");
    }

    return newData;
  }
};

module.exports = S3;

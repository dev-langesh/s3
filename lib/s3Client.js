const { S3Client } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({ region: "us-east-1" });

module.exports = { s3Client };

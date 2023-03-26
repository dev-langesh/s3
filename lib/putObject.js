const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { s3Client } = require("./s3Client");

// put object into bucket
async function putObjectToS3(params) {
  const res = await s3Client.send(new PutObjectCommand(params));

  return res;
}

module.exports = { putObjectToS3 };

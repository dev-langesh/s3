const { CreateBucketCommand } = require("@aws-sdk/client-s3");

// create bucket
async function createNewBucket(bucketName) {
  const res = await s3Client.send(
    new CreateBucketCommand({ Bucket: bucketName })
  );

  return res;
}

module.exports = { createNewBucket };

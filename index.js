const express = require("express");
const { putObjectToS3 } = require("./lib/putObject");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", async (req, response) => {
  const { Bucket, Key, Body } = req.body;

  const params = {
    Bucket,
    Key,
    Body,
  };

  const res = await putObjectToS3(params);

  console.log(res);

  if (res["$metadata"].httpStatusCode === 200) {
    return response.json({
      message: "object uploaded to s3",
      data: res["$metadata"],
    });
  } else {
    return response.json({ error: "error" });
  }
});

app.listen(8000);

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const client = new OpenAI({
  apiKey: process.env.AZURE_OPENAI_API_KEY,
  baseURL: `${process.env.AZURE_OPENAI_ENDPOINT}/openai/v1`,
});

app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    console.log("Endpoint:", process.env.AZURE_OPENAI_ENDPOINT);
    console.log("Model:", process.env.AZURE_OPENAI_DEPLOYMENT);

    const result = await client.images.generate({
      model: process.env.AZURE_OPENAI_DEPLOYMENT,
      prompt: prompt,
      size: "1024x1024",
    });

    // console.log("RESULT:", JSON.stringify(result, null, 2));

    const imageData = result.data[0];

    res.json({
      success: true,
      image: imageData.url || null,
      b64: imageData.b64_json || null,
    });

    // res.json({
    //   success: true,
    //   image: result?.data?.[0]?.url || null,
    // });
  } catch (err) {
    console.error("FULL ERROR:");
    console.error(err);

    if (err.error) {
      console.error("API ERROR:", err.error);
    }

    res.status(500).json({
      success: false,
      message: err.message,
      details: err.error || null,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173", 
    "X-Title": "WebXGPT",
  },
});

const getOpenAIAPIResponse = async (message) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4o-mini",   // aap yaha model change kar sakte ho
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    return completion.choices[0].message.content;

  } catch (err) {
    console.log("OpenRouter Error:", err);
    return "Error generating response.";
  }
};

export default getOpenAIAPIResponse;

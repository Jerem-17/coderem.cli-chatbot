import { Configuration, OpenAIApi } from "openai";

console.log(process.env.OPENAI_API_KEY);

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const getFromOpenAI = async (req, res) => {
  try {
    res.status(200).json({ message: "Hello from jeremX" });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const postOnOpenAI = async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

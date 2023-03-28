import { Configuration, OpenAIApi } from "openai";

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const configuration = new Configuration({
    organization: process.env.CHATGPT_ORG_ID,
    apiKey: process.env.CHATGPT_API_KEY,
});

const openai = new OpenAIApi(configuration);

// Query OpenAI Chat Model
const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
        {role: "user", content: "Hello World!"},
    ]
});

console.log(completion.data.choices[0].message)
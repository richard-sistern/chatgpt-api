# chatgpt-api

Following a [tutorial on ChatGPT API](https://www.youtube.com/watch?v=LX_DXLlaymg&ab_channel=AdrianTwarog).

## Setup

1. Install [Node.js](https://nodejs.org/en), for this project choose `18.x`
2. Run `npm init` in root folder
3. Provide a project name, for example, `chatgpt4api`
4. Press `return` for all other options
5. Install additional packages `npm install express openai body-parser cors`
6. Add dotenv package to split config from code `npm install dotenv`

## Build

1. Create `index.js` in root folder
2. Create an [API key](https://platform.openai.com/account/api-keys)
3. Grab your [Organization ID](https://platform.openai.com/account/org-settings)
4. Create a `.env` file in root of project.  **DO NOT STORE THIS IN SOURCE CONTROL**

Contents of .env file:
```
CHATGPT_API_KEY="<YOUR API KEY>"
CHATGPT_ORG_ID="<YOUR ORG ID>"
```


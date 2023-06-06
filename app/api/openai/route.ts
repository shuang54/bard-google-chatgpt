import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

async function handle(chatData:any) {
  const completion = await openai.createChatCompletion(chatData)
  console.log(completion.data.choices[0].message)
}
export const POST = handle
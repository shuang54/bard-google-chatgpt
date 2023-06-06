import axios from 'axios'

const openaiAxios = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
  },
  timeout: 10000 // 设置请求超时时间为 5 秒钟
})

const openaiRequest = async (text:string, model:string) => {
  try {
    const response = await openaiAxios.post('/chat/completions', {
      prompt: text,
      max_tokens: 60,
      n: 1,
      stop: '\n',
      model: model
    })
    console.log(response.data.choices[0].text)
  } catch (error) {
    console.error(error)
  }
}



export async function POST() {
  const text = await openaiRequest('hello', 'gpt-3.5-turbo')
  return {
    props: { text }
  }
}
export default function handler(req:any, res:any) {
  res.status(200).json({ name: 'John Doe' })
}
import axios from "axios";

export default async function getAnswer(chatData:Object){
  const answer = await axios.post('/api/openai/v1/chat/completions',chatData)
  return answer
}
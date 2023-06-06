import axios from "axios";
import { CreateChatCompletionRequest } from "openai/dist/api";
export default async function getAnswer(chatData:CreateChatCompletionRequest){
  const answer = await axios.post('/api/openai/v1/chat/completions',chatData)
  return answer.data
}
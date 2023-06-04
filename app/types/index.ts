export type ConversationItem = {
  content: string
  role: 'user' | 'assistant' | 'system'
  date?: string
  id?: number
}

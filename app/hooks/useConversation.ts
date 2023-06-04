import {create} from 'zustand'
import { CookieService } from '../lib/CookieService'
import { ConversationItem } from '../types'

interface conversationStore {
  conversation: ConversationItem[]
  addMessage: (data: ConversationItem) => void
  deleteMessage: (id: number) => void
  removeAll:()=>void
}



const useConversation = create<conversationStore>((set) => ({
  conversation: CookieService.getItem('conversation') || [],
  addMessage: (data) => 
  set((state) => {
    CookieService.setItem('conversation', state.conversation.concat(data));
    // console.log(state.conversation.concat(data))
      return {
        conversation: [...state.conversation, data],
      };
  }),
  deleteMessage: (id) =>
    set((state) => {
      CookieService.setItem('conversation',state.conversation.filter((_, i) => i !== id))
      return {
        conversation: state.conversation.filter((_, i) => i !== id)
      }
    }),
  removeAll: () =>
    set((state) => {
      CookieService.removeItem('conversation')
      return {
      conversation: []
    }})
}))

export { useConversation }

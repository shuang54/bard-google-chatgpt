import { create } from 'zustand'
import { CookieService } from '../lib/CookieService'
import { ConversationItem } from '../types'

interface selectConversationStore {
  selectConversation: ConversationItem[]
  updatedSelectMessage: (data: ConversationItem[]) => void
}

const useSelectConversation = create<selectConversationStore>((set) => ({
  selectConversation: [{ content: '', role: 'assistant' }],
  updatedSelectMessage: (data: ConversationItem[]) =>
    set((state) => {
      state.selectConversation = {...data}
      return {
        ...state
      }
    })
}))

export { useSelectConversation }

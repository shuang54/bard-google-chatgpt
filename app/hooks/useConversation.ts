import {create} from 'zustand'
import { CookieService } from '../lib/CookieService'
import { ConversationItem } from '../types'

interface conversationStore {
  conversation: ConversationItem[]
  addMessage: (data: ConversationItem) => void
  deleteMessage: (id: number | string) => void
  updatedMessage: (data: ConversationItem) => void
  removeAll: () => void
}



const useConversation = create<conversationStore>((set) => ({
  conversation: CookieService.getItem('conversation') || [],
  addMessage: (data) =>
    set((state) => {
      CookieService.setItem('conversation', state.conversation.concat(data))
      // console.log(state.conversation.concat(data))
      return {
        conversation: [...state.conversation, data]
      }
    }),
  deleteMessage: (id) =>
    set((state) => {
      CookieService.setItem(
        'conversation',
        state.conversation.filter((_, i) => i !== id)
      )
      return {
        conversation: state.conversation.filter((_, i) => i !== id)
      }
    }),
  updatedMessage: (data:ConversationItem) =>
    set((state) => {

      const msgList = state.conversation.map((message) => {
        if (message.id === data.id) {
          // 如果当前对象的 id 与指定的 id 相同，则修改其内容
          return {
            // 复制原对象的属性
            ...message,
            // 修改 content 属性的值
            ...data
          }
        } else {
          // 如果当前对象的 id 与指定的 id 不同，则不做修改
          return message
        }
      })

      CookieService.setItem('conversation', msgList)
      return {
        conversation: msgList
      }
    }),
  removeAll: () =>
    set((state) => {
      CookieService.removeItem('conversation')
      return {
        conversation: []
      }
    })
}))

export { useConversation }

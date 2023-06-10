'use client';
import React, { useRef } from 'react'
import DialogItem from './DialogItem'
import DialogItemBot from './DialogItemBot';
import { useConversation } from '@/app/hooks/useConversation';
const DialogList = () => {
  // 对话记录
  const { conversation, addMessage, deleteMessage } = useConversation();
  // console.log(conversation)
  const lists = conversation.length > 0 ? (
  conversation.map((item,index)=>{
    if(item.role == 'user'){
      return (
        <DialogItem key={item.id} content={item.content} />
      )
    }else{
      return (
        // 只显示最后一个item的头部组件
        <DialogItemBot key={item.id} isHeader={conversation.length-1 === index} isFooter content={item.content} />
      )
    }
  })) : (<DialogItemBot isHeader={false} isFooter={false} content='default' />)

  return (
    <div className='p-4 basis-10/12 overflow-y-auto flex-grow-0 flex-shrink-0 dialogList'>
      {lists}
    </div>
  )
}

export default DialogList
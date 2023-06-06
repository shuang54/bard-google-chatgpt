'use client';
import React, { useRef } from 'react'
import DialogList from './DialogList'
import MessageBox from './MessageBox'

const DialogBox = () => {

  // 添加滚动条到底部的方法
  const dialogItemBot = useRef<HTMLDivElement | null>(null);
  const handleScrollDown = ()=>{
    if (dialogItemBot == null){
      return
    }else{
      const node:any= dialogItemBot.current?.childNodes[0];
      // 异步更新，同步更新的话，UI还没有更新
      setTimeout(()=>{
        node.scrollTop = node.scrollHeight ;
      },0)
    }
  }
  return (
    <div className=' w-full md:w-4/5 sm:p-0 xs:p-0 lg:4/5  xl:w-8/12 overflow-hidden p-10 pt-0 mb-4 h-[100%] '>
      <div ref={dialogItemBot} className='h-full w-full  bg-[#f3f6fc] rounded-2xl flex flex-col '>
        <DialogList/>
        <MessageBox handleScrollDown={handleScrollDown }/>
      </div>
    </div>
  )
}

export default DialogBox
'use client';
import { useConversation } from '@/app/hooks/useConversation';
import { CookieService } from '@/app/lib/CookieService';
import React, { useEffect, useRef, useState } from 'react'
import { AiFillAudio } from 'react-icons/ai'
import { RiSendPlane2Line } from 'react-icons/ri'
import { getCurrentTime } from '@/app/lib/tools'
const MessageBox = () => {
  // 创建一个 state 来保存 textarea 的值和高度
  const [value, setValue] = useState('');
  const [height, setHeight] = useState('24');
  // 创建一个 ref 来引用 textarea 元素
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // 创建一个函数来更新 textarea 的高度
  const updateHeight = () => {
    const element = textareaRef.current;
    setHeight(`${element?.scrollHeight}px`);
    // console.log(value, element?.scrollHeight)
  };

  // 是否聚焦
  const [isFocus, setIsFocus] = useState(false);

  // textarea是否为空
  const [isInputFilled, setIsInputFilled] = useState(false);
  useEffect(()=>{
    setIsInputFilled(value !== '');
  },[value])

  // 对话记录
  const { conversation, addMessage, deleteMessage } = useConversation();
  // console.log(conversation)
  const handleSendMessage = ()=>{
    if(value==="") return;
    addMessage({ content: value, role:'user',date:getCurrentTime(),id:})
    setValue("")
    // console.log(conversation)
    // console.log(CookieService.getItem('conversation'));
  }
  return (
    <div className=' w-full h-auto basis-2/12 flex flex-col justify-center items-center'>
      <div className='w-full h-auto flex justify-center items-center px-24'>
        <div className={`w-11/12 px-10 h-auto flex justify-evenly items-center border rounded-3xl bg-white border-black p-1 ${isFocus ?'border-blue-500 border-2':''} `}
        >
          <textarea
            onFocus={()=>{
              setIsFocus(true)
            }}
            onBlur={()=>{
              setIsFocus(false)
            }}
            ref={textareaRef}
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              updateHeight();
            }}
            onInput={updateHeight}
            style={{ 'height':height }}
          className='w-11/12  h-[24px] max-h-[180px] min-h-[15px] appearance-none resize-none focus:outline-none  placeholder' placeholder="Enter a prompt here" ></textarea>
          <div className='p-3  hover:bg-zinc-200 rounded-full cursor-pointer'>
            <AiFillAudio size={24}/>
          </div>
        </div>
        <RiSendPlane2Line onClick={handleSendMessage} size={48} color={`${isInputFilled ? '#0b57d0' : '#ccc'}`} className={`m-2 ${isInputFilled ? 'cursor-pointer hover:bg-[#eaf1fb]' : ''} p-3 rounded-full`} />
      </div>
      <p className='text-xs m-3'>Bard may display inaccurate or offensive information that doesn’t represent Google’s views.</p>
    </div>
  )
}

export default MessageBox
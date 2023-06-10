'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import DialogItemHeader from './DialogItemHeader';
import DialogItemFooter from './DialogItemFooter';
import ReactMarkdown from 'react-markdown';
import { Markdown } from '../Markdown';
import { useSelectConversation } from '@/app/hooks/useSelectConversation';
import { useConversation } from '@/app/hooks/useConversation';
import { getCurrentTime } from '@/app/lib/tools';
import { v4 as uuidv4 } from 'uuid';
import getAnswer from '@/app/actions/getAnswer';
interface DialogItemBotProps {
  isHeader?: boolean;
  isFooter?: boolean;
  botAvatar?: string;
  content: string;
}

const DialogItemBot: React.FC<DialogItemBotProps> = ({
  isHeader = true,
  isFooter = true,
  botAvatar = "/images/sparkle_resting.gif",
  content
}) => {
  // console.log(content)
  if(content == "")
    {
    isHeader = false
    isFooter = false
    } 
  const { addMessage, conversation, updatedMessage } = useConversation()
  const { updatedSelectMessage } = useSelectConversation()
    const handleClick = async (content:any)=>{
      addMessage({ content, role: "user", date: getCurrentTime(), id:uuidv4() })
      const id = uuidv4()
      addMessage({ content: "", role: 'assistant', date: getCurrentTime(), id })
      // 发送请求获取数据
      const answer = await getAnswer({
        model: 'gpt-3.5-turbo',
        n: 2,
        temperature: 0.5,
        // stream:true,
        messages: [...(conversation.map(({ content, role }) => ({ content, role }))), { role: 'user', content }]
      });
      updatedMessage({ content: answer.choices[0].message.content, role: answer.choices[0].message.role, date: getCurrentTime(), id })
      updatedSelectMessage([{ content: answer.choices[0].message.content, role: answer.choices[0].message.role, date: getCurrentTime(), id }, { content: answer.choices[1].message.content, role: answer.choices[1].message.role, date: getCurrentTime(), id }])
    // console.log(answer)
    }
  // 
  const CodeBlock = ({ value }:any) => {
  return (
    <pre>
      <code>{value}</code>
    </pre>
  );
};
return (
  <div className='bg-white dark:bg-[#131314] dark:text-white p-4 rounded-2xl  mb-2'>
      {isHeader && 
      <DialogItemHeader  />
      }
      <div className=' flex justify-start items-start'>
        {
          content == "" ? (
            <Image width={32} height={32} src='/images/sparkle_thinking.gif' alt="sparkle_resting" className=' mr-8' />
          ):(
            <Image width={32} height={32} src={botAvatar} alt="sparkle_resting" className=' mr-8' />
          )
        }
        <div className=' leading-10'>
          {content === 'default' ? (
            <div>
            <p className='leading-5 '>
                I’m Bard, your creative and helpful collaborator. I have limitations and won’t always get it right, but your feedback will help me improve.
              </p>
              <p> Not sure where to start? You can try: </p>
              <p>
              <span onClick={() => handleClick("Draft a design brief for my community bookstore’s new logo")} className=' text-blue-500 cursor-pointer hover:bg-[#f6fafe] dark:hover:bg-[#191a1d]'>
                  Draft a design brief for my community bookstore’s new logo
                </span>
              </p>
              <p>

              <span onClick={() => handleClick("Give me landscaping inspiration for my small city backyard")} className=' text-blue-500 cursor-pointer hover:bg-[#f6fafe] dark:hover:bg-[#191a1d]'>
                  Give me landscaping inspiration for my small city backyard
                </span>
              </p>
              <p>

              <span onClick={() => handleClick("Create a vegetarian meal with the following: cauliflower, cucumber, and yogurt")} className=' text-blue-500 cursor-pointer hover:bg-[#f6fafe] dark:hover:bg-[#191a1d]'>
                  Create a vegetarian meal with the following: cauliflower, cucumber, and yogurt
                </span>
              </p>
            </div>
          ) : (
            <ReactMarkdown>{content}</ReactMarkdown>
            //  <Markdown
            //    content={content}
            //  />
          )}
        </div>
      </div>
      {isFooter&& 
      <DialogItemFooter  />
      }

    </div>

  )
}

export default DialogItemBot
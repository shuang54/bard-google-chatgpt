import React, { MouseEventHandler } from 'react'

interface otherDraftItemProps {
  step:string;
  content:string;
  handleAnswerId: (id: string) => any;
  active:boolean;
}

const OtherDraftItem: React.FC<otherDraftItemProps> = ({
  step,
  content,
  handleAnswerId,
  active
}) => {
  return (
    <div onClick={() => handleAnswerId(step)} 
        className={`flex basis-1/2 flex-col min-h-[104px] p-3 border 
        rounded-xl text-[12px] hover:bg-hoverBg dark:hover:bg-darkHoverBg cursor-pointer 
        hover:drop-shadow-xl transition-all ${active ? 'bg-[#d3e3fd] dark:bg-[#525357] dark:hover:bg-[#323337]  hover:bg-[#c0cfe5] border-[#0b57d0]' : ''}`}>
      <span className={`w-[56px]  hover:bg-hoverBg dark:bg-[#303030] rounded-xl text-center ${active ? 'dark:bg-[#a8c7fa]  bg-[#0b57d0] text-[white]' : ''}`}>{step}</span>
      <p className='pt-2'>{content}</p>
    </div>
  )
}

export default OtherDraftItem
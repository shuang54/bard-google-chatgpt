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
        rounded-xl text-[12px] hover:bg-[#e5e6e7] cursor-pointer 
        hover:drop-shadow-xl transition-all ${active ? 'bg-[#d3e3fd]  hover:bg-[#c0cfe5] border-[#0b57d0]' : ''}`}>
      <span className={`w-[56px]  bg-[#e8eaed] rounded-xl text-center ${active ? 'bg-[#0b57d0] text-[white]' : ''}`}>{step}</span>
      <p className='pt-2'>{content}</p>
    </div>
  )
}

export default OtherDraftItem
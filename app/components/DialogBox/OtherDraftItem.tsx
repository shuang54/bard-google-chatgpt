import React from 'react'

interface otherDraftItemProps {
  step:string;
  content:string;
}

const OtherDraftItem: React.FC<otherDraftItemProps> = ({
  step,
  content
}) => {
  return (
    <div className='flex basis-1/2 flex-col min-h-[104px] p-3 border rounded-xl text-[12px] hover:bg-[#e5e6e7] cursor-pointer  hover:drop-shadow-xl transition-all'>
      <span className='w-[56px]  bg-[#e8eaed] rounded-xl text-center '>{step}</span>
      <p className='pt-2'>{content}</p>
    </div>
  )
}

export default OtherDraftItem
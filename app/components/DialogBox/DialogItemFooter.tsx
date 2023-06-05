import React from 'react'
import { HiEllipsisVertical } from 'react-icons/hi2'
import { MdOutlineFileUpload } from 'react-icons/md'
import { LuThumbsUp, LuThumbsDown } from 'react-icons/lu'
import IconItem from '../IconItem'
import Image from 'next/image'
const DialogItemFooter = () => {
  return (
    <div className='flex justify-between items-center p-2 pt-6 pl-16 '>
      <div className='flex justify-center items-center gap-3'>
        <IconItem icon={LuThumbsUp} />
        <IconItem icon={LuThumbsDown} />
        <IconItem icon={MdOutlineFileUpload} />
        <div className='p-2 border h-[36px] border-[#c4c7c5] rounded-md cursor-pointer hover:bg-[#f9f9f9] flex justify-center items-center active:bg-zinc-300 transition-all'>
          <Image width={16} height={16} src="/images/Google.svg.png" alt="Google" />
          <span className='text-[14px] ml-2'>Google it</span>
        </div>
      </div>
      <div>
        <div className=" flex flex-row justify-center items-center gap-3  ">
          <HiEllipsisVertical size={48} className=" cursor-pointer hover:bg-zinc-100 hover:rounded-full p-3 active:bg-zinc-300 transition-all" />
        </div>
      </div>
    </div>
  )
}

export default DialogItemFooter
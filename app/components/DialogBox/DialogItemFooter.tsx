import React, { useState } from 'react'
import { HiEllipsisVertical } from 'react-icons/hi2'
import { MdOutlineFileUpload } from 'react-icons/md'
import { LuThumbsUp, LuThumbsDown } from 'react-icons/lu'
import { RiFileCopyLine } from 'react-icons/ri'
import { RiFlag2Line } from 'react-icons/ri'
import IconItem from '../IconItem'
import Image from 'next/image'
import MenuItem from '../Navbar/MenuItem'
const DialogItemFooter = () => {
  // 控制copy的显示
  const [copyIsShow,setCopyIsShow] = useState(false);
  
  return (
    <div className='flex justify-between items-center p-2 pt-6 pl-16 '>
      <div className='flex justify-center items-center gap-3'>
        <IconItem icon={LuThumbsUp} />
        <IconItem icon={LuThumbsDown} />
        <IconItem icon={MdOutlineFileUpload} />
        <div className='p-2 border h-[36px] border-[#c4c7c5] rounded-md cursor-pointer hover:bg-[#f9f9f9] flex justify-center items-center '>
          <Image width={16} height={16} src="/images/Google.svg.png" alt="Google" />
          <span className='text-[14px] ml-2'>Google it</span>
        </div>
      </div>
      <div className=' relative'>
        <div onClick={() => setCopyIsShow(!copyIsShow)} className=" flex flex-row justify-center items-center gap-3  ">
          <HiEllipsisVertical size={48} className=" cursor-pointer hover:bg-zinc-100 hover:rounded-full p-3 active:bg-zinc-300 transition-all" />
        </div>
        {/* copy */}
        {copyIsShow && (
          <div className='border p-1 absolute right-0 bottom-[-100px] w-[220px] bg-white select-none z-20'>
            <MenuItem onClick={() => { }} label='Copy' icon={RiFileCopyLine} />
            <MenuItem onClick={() => { }} label='Report legal issue' icon={RiFlag2Line} />
          </div>
        )}
        {/* 透明层 */}
        {copyIsShow && (
          <div onClick={() => setCopyIsShow(false)} className='fixed inset-0 bg-black opacity-0 cursor-pointer z-10' />
        )}
      </div>
    </div>
  )
}

export default DialogItemFooter
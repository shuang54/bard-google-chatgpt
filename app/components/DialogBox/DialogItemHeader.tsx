import React, { useCallback, useState } from 'react'
import {
  IoIosArrowDown,
  IoIosArrowUp
} from 'react-icons/io'

const DialogItemHeader = () => {
  const [isViewShow,setIsViewShow] = useState(false);
  const handleChangeViewShow = useCallback(()=>{
    setIsViewShow(!isViewShow)
  }, [isViewShow])
  return (
    <div className="w-full h-auto">
      <div className=' flex justify-end p-2 pr-4 ' onClick={handleChangeViewShow}>
        <div className='w-[160px] h-[36px] text-sm hover:bg-zinc-200 flex justify-center items-center cursor-pointer rounded-xl select-none'> 
        View other drafts 
          {isViewShow ? (
            <IoIosArrowUp size={24} color='#0b57d0' className='pl-1'/>
            ):(
            <IoIosArrowDown size={24} color='#0b57d0' className='pl-1'/>
          )}
        </div>
      </div>
      {
        isViewShow &&(
          <div>is</div>
        )
      }
    </div>
  )
}

export default DialogItemHeader
import React, { useCallback, useState } from 'react'
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdRefresh
} from 'react-icons/io'
import OtherDraftItem from './OtherDraftItem';
const DialogItemHeader = () => {
  const [isViewShow,setIsViewShow] = useState(false);
  const handleChangeViewShow = useCallback(()=>{
    setIsViewShow(!isViewShow)
  }, [isViewShow])

  // 判断选中哪一个回答
  const [answerId,setAnswerId] = useState('1');
  const handleAnswerId = (id:string)=>{
    setAnswerId(id)
    console.log(id)
  }
  return (
    <div className="w-full h-auto">
      <div className=' flex justify-end p-2 pr-4 ' onClick={handleChangeViewShow}>
        <div className='w-[160px] h-[36px] text-sm hover:bg-hoverBg dark:hover:bg-darkHoverBg flex justify-center items-center cursor-pointer rounded-xl select-none'> 
        View other drafts 
          {isViewShow ? (
            <IoIosArrowUp size={24} className='dark:text-[#a4c7fa] text-[#3a57d0] pl-1'  />
            ):(
              <IoIosArrowDown size={24} className='dark:text-[#a4c7fa] text-[#3a57d0] pl-1'/>
          )}
        </div>
      </div>
      {
        isViewShow &&(
          <div className='flex justify-center items-center pb-4 transition-all'>
            <div className='flex w-full justify-center items-center gap-4'>
              <OtherDraftItem active={answerId == "Draft 1"} handleAnswerId={handleAnswerId} step="Draft 1" content='Hi there! How can I help you today?'/>
              <OtherDraftItem active={answerId == "Draft 2"} handleAnswerId={handleAnswerId} step="Draft 2" content='Hi there! How can I help you today?'/>
            </div>
            <div onClick={()=>{}} className='border rounded-3xl ml-2 cursor-pointer min-h-[104px] w-[40px] flex justify-center items-center '>
              <IoMdRefresh size={18} onClick={() => { }}  className='dark:text-[#a4c7fa] text-[#3a57d0]'/>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default DialogItemHeader
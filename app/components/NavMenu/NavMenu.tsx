'use client';
import React, { useState } from 'react'
import MenuItem from './MenuItem'
import { GrPowerReset } from 'react-icons/gr'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdUpdate, MdOutlineFeedback } from 'react-icons/md'
import { LuCalendarRange, LuMoon } from 'react-icons/lu'
import { BsSun } from 'react-icons/bs'
const NavMenu = () => {
  const [colorTheme,setColorTheme] = useState(true);
  const resetChat = ()=>{
    console.log('resetChat')
  }

  // 切换颜色主题
  const changeColorTheme = ()=>{
    setColorTheme(!colorTheme)
  }
  return (
    <div className="md:w-1/4 md:block hidden pt-2 relative" >
      <div>
        <MenuItem label='Reset chat' onClick={() => resetChat()} icon={GrPowerReset} />
        <MenuItem label='Bard Activity' onClick={() => resetChat()} icon={MdUpdate} />
        <MenuItem label='FAQ' onClick={() => resetChat()} icon={AiOutlineQuestionCircle} />
        <MenuItem label='Updates' onClick={() => resetChat()} icon={LuCalendarRange} />
        <MenuItem label='Help' onClick={() => resetChat()} icon={MdOutlineFeedback} />
      </div>
      <div onClick={changeColorTheme} className=' absolute bottom-5 left-5'>
        {colorTheme ? (
          <LuMoon size={42} className='border border-black rounded-full hover:bg-zinc-200 p-3 cursor-pointer'/>
          ) : (
          <BsSun size={42} className='border border-black rounded-full hover:bg-zinc-200 p-3 cursor-pointer'/>
        )}
      </div>
    </div>
  )
}

export default NavMenu
'use client';
import React, { useState } from 'react'
import MenuItem from './MenuItem'
import { GrPowerReset } from 'react-icons/gr'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdUpdate, MdOutlineFeedback } from 'react-icons/md'
import { LuCalendarRange, LuMoon } from 'react-icons/lu'
import { BsSun } from 'react-icons/bs'
import { BiReset } from 'react-icons/bi'
import { CookieService } from '@/app/lib/CookieService';
import { useConversation } from '@/app/hooks/useConversation';
const NavMenu = () => {
  const [colorTheme,setColorTheme] = useState(true);
  const {removeAll} = useConversation();
  const resetChat = ()=>{
    removeAll()
  }

  // 切换颜色主题
  const changeColorTheme = ()=>{
    setColorTheme(!colorTheme)
    if (colorTheme) {
      document.body.classList.add('dark');
      document.body.classList.remove('white');
      window.localStorage.setItem('theme','dark')
    }else{
      document.body.classList.add('white');
      document.body.classList.remove('dark');
      window.localStorage.setItem('theme','white')
    }
    
  }
  return (
    <div className="md:w-1/5 md:block hidden pt-2 relative dark:bg-black dark:text-white" >
      <div>
        <MenuItem label='Reset chat' onClick={() => resetChat()} icon={BiReset} />
        <MenuItem label='Bard Activity' onClick={() => resetChat()} icon={MdUpdate} />
        <MenuItem label='FAQ' onClick={() => resetChat()} icon={AiOutlineQuestionCircle} />
        <MenuItem label='Updates' onClick={() => resetChat()} icon={LuCalendarRange} />
        <MenuItem label='Help' onClick={() => resetChat()} icon={MdOutlineFeedback} />
      </div>
      <div onClick={changeColorTheme} className=' absolute bottom-5 left-5'>
        {colorTheme ? (
          <LuMoon size={42} className='border border-black rounded-full hover:bg-hoverBg dark:hover:bg-darkHoverBg p-3 cursor-pointer'/>
          ) : (
            <BsSun size={42} className='border border-black rounded-full hover:bg-hoverBg dark:hover:bg-darkHoverBg p-3 cursor-pointer dark:border-white'/>
        )}
      </div>
    </div>
  )
}

export default NavMenu
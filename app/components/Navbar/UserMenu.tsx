'use client';

import { TiThSmall } from 'react-icons/ti'
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';


const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, []);
  return (
    <div className=" relative">
      <div className="flex flex-row items-cen
      gap-3">
        {/* 菜单按钮 */}
        <div
          className="
          p-1
          md:py-1
          flex
          flex-row
          items-center
          gap-4
         "
        >
          <TiThSmall size={48} color='#5f6368' className='rounded-full cursor-pointer hover:bg-hoverBg dark:hover:bg-darkHoverBg hover:rounded-full p-3' />
          <div 
            onClick={toggleOpen}
          className='
           block
           cursor-pointer
           hover:rounded-full
          border border-transparent 
          hover:bg-gray-300
          p-1
          '>
            <Avatar src="/images/placeholder.jpg"/>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='
          absolute
          rounded-xl
          shadow-md
          w-[40vw]
          md:w-3/4
          bg-white
          overflow-hidden
          right-0
          top-12
          text-sm
        '>
          <div className='flex flex-col cursor-pointer'>
            <>
              <MenuItem
                onClick={() => { }}
                label='Login'
              />
              <MenuItem
                onClick={() => { }}
                label='Sign up'
              />
            </>
          </div>
        </div>

      )}
      


    </div>
  )
}

export default UserMenu;
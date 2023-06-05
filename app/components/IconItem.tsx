import React from 'react'
import { IconType } from 'react-icons/lib';
interface iconItemProps {
  title?:string;
  icon:IconType
}

const IconItem: React.FC<iconItemProps> = ({
  title,
  icon:Icon
}) => {
  return (
    <div className='p-2 border border-[#c4c7c5] rounded-md cursor-pointer hover:bg-[#f9f9f9] active:bg-zinc-300 transition-all'>
      <Icon size={18} color='#0b57d0' />
    </div>
  )
}

export default IconItem
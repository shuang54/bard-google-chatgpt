'use client';

import { IconType } from "react-icons/lib";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  icon?:IconType
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label,
  icon:Icon
}) => {
  return (
    <div
      onClick={onClick}
      className={`
      px-4
      py-3
       hover:bg-hoverBg dark:hover:bg-darkHoverBg
       dark:border-[#ccc]
      font-semibold
       cursor-pointer
      ${Icon ? 'flex justify-start items-center gap-3' : ''}
    `}
    >
      {Icon && (
        <Icon size={24} className="" />
      )}
      {label}
    </div>
  );
}

export default MenuItem;
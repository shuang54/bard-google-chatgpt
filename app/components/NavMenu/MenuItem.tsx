'use client';

import { ReactNode } from "react";
import { IconType } from "react-icons";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  icon?: IconType
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label,
  icon:Icon
}) => {
  return (
    <div
      onClick={onClick}
      className="
      py-3
      hover:bg-neutral-100
      hover:rounded-r-full
       cursor-pointer
      font-semibold
      h-14
      w-64
      flex
       justify-start
       items-center
    "
    >
      {Icon && (<Icon className="w-14 h-14 p-4" />)}
      <span className=" text-zinc-700 font-normal">{label}</span>
    </div>
  );
}

export default MenuItem;
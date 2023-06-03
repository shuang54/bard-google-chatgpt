'use client';
import Container from "../Container";
import Logo from "./Logo";
import {HiBars3} from "react-icons/hi2"
import UserMenu from "./UserMenu";

const Navbar = () => {

  return (
    <div className="fixed w-full bg-white z-10 ">
      <div className="py-1">
        <Container>
          <div
            className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0
          "
          >
            <div className=" flex flex-row justify-center items-center gap-3 ">
              <HiBars3 size={48} className=" cursor-pointer hover:bg-zinc-100 hover:rounded-full p-3 "/>
              <Logo />
            </div>
            <UserMenu/>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar;
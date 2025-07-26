'use client'
import Container from "@/ui/Container";
import PrimaryBtn from "@/ui/PrimaryBtn";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";

function Navbar() {
    const [menu,setMenu] = useState(false)

    const handelMenuToggle =()=>{
        setMenu(prev=>!prev)
    }
  return (
    <nav className="py-4 lg:py-6 xl:py-[28px] sticky top-0 left-0 z-50 bg-white">
      <Container>
        <div className="flex  items-center justify-between">
          <h3 className="text-nowrap uppercase text-primary text-2xl lg:text-3xl xl:text-[40px] font-black">
            ridge <span className="text-secondary">street</span>
          </h3>
          <div className="hidden lg:flex items-center lg:gap-3 xl:gap-8">
            <ul className="flex items-center gap-5 xl:gap-8 text-nowrap font-medium lg:[18px] xl:text-[20px]">
              <li>
                <Link href="#">Fix and Flip</Link>
              </li>
              <li>
                <Link href="#">Rental Loans</Link>
              </li>
              <li>
                <Link href="#">Where We Lend</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Resources</Link>
              </li>
            </ul>

            <PrimaryBtn btnText="Get Approved Online" />
          </div>
          <span onClick={handelMenuToggle} className="text-3xl lg:hidden">
            <HiOutlineMenu />
          </span>
        </div>
      </Container>
          <MobileMenu menu={menu}/>
    </nav>
  );
}
function MobileMenu({menu}){
return(
    <div className={`lg:hidden  bg-white h-0 ${menu&&" h-[320px] "} transition-all duration-300  overflow-hidden w-full shadow-lg mt-2`}>
        <div className={`flex flex-col items-center gap-5 p-5`}>
            <ul className="flex flex-col items-center gap-5 font-medium  text-[18px]">
              <li>
                <Link href="#">Fix and Flip</Link>
              </li>
              <li>
                <Link href="#">Rental Loans</Link>
              </li>
              <li>
                <Link href="#">Where We Lend</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Resources</Link>
              </li>
            </ul>

            <PrimaryBtn btnText="Get Approved Online" />
          </div>
    </div>
)
}

export default Navbar;

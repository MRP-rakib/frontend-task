import Container from "@/ui/Container";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-primary text-white py-6 lg:py-8 xl:py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-4">
              <h4 className="text-[16px] lg:text-lg xl:text-2xl font-bold">
                Company
              </h4>
              <ul className="flex flex-col font-normal text-[14px] lg:text-[16px] xl:text-[20px]">
                <li>About</li>
                <li>Fix And Flip Loans</li>
                <li>DSCR Rental Loans</li>
                <li>Ground Up Construction Loans</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[16px] lg:text-lg xl:text-2xl font-bold">
                Where We Lend
              </h4>
              <ul className="flex flex-col font-normal text-[14px] lg:text-[16px] xl:text-[20px]">
                <li>Florida</li>
                <li>Texas</li>
                <li>Georgia</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[16px] lg:text-lg xl:text-2xl font-bold">
              Top Cites We Lend In
            </h4>
            <ul className="flex flex-col font-normal text-[14px] lg:text-[16px] xl:text-[20px]">
              <li>Orlando</li>
              <li>Tampa</li>
              <li>Miami</li>
              <li>Jacksonville</li>
              <li>Houston</li>
              <li>Austin</li>
              <li>Antonio</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-4">
              <h4 className="text-[16px] lg:text-lg xl:text-2xl font-bold">
                Top Resources
              </h4>
              <ul className="flex flex-col font-normal text-[14px] lg:text-[16px] xl:text-[20px]">
                <li>Loan Calculator</li>
                <li>What is a Hard Money Loan</li>
                <li>What is a Hard Money Loan</li>
                <li>How to find fix and flip deals</li>
                <li>Best Cities for Fix and Flips</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[16px] lg:text-lg xl:text-2xl font-bold">
                Useful Link
              </h4>
              <ul className="flex flex-col font-normal text-[14px] lg:text-[16px] xl:text-[20px]">
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-4">
              <h4 className="text-[16px] lg:text-lg xl:text-2xl font-bold">
                Contact Us
              </h4>
              <ul className="flex flex-col font-normal text-[14px] lg:text-[16px] xl:text-[20px]">
                <li>Email</li>
                <li>loans@ridgestreetcap.com</li>
                <li>Direct/Text</li>
                <li>Phone: 786-304-2751</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[16px] lg:text-lg xl:text-2xl font-bold">
                Useful Link
              </h4>
              <ul className="flex flex-col gap-5 font-normal text-[14px] lg:text-[16px] xl:text-[20px]">
                
                    <li className="text-nowrap py-4 px-10 flex items-center justify-center bg-white uppercase text-primary text-lg xl:text-2xl font-black">
                  ridge <span className="text-secondary">street</span>
                </li>
                
                <li className="flex items-center justify-center gap-10">
                    <span>
                        <Image src='/linkedin.png' width={18} height={18} alt="icon"/>
                    </span>
                    <span>
                        <Image src='/facebook.png' width={18} height={18} alt="icon"/>
                    </span>
                    <span>
                        <Image src='/twitter.png' width={18} height={18} alt="icon"/>
                    </span>
                    <span>
                        <Image src='/instagram.png' width={18} height={18} alt="icon"/>
                    </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

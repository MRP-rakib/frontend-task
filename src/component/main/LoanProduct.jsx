import React from "react";
import LoanCard from "../ui/LoanCard";
import Container from "@/ui/Container";
import Svg1 from "@/ui/svg/Svg1";
import Svg2 from "@/ui/svg/Svg2";
import Svg3 from "@/ui/svg/Svg3";

function LoanProduct() {
  return (
    <div className="mt-10 lg:mt-[80px] mb-10 lg:mb-[120px]">
      <h2 className=" uppercase text-[24px] lg:text-[50px] font-extrabold text-primary text-center">
        Loan product
      </h2>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-15">
          <LoanCard cardIcon={<Svg1/>} cardTitle='Fix and Flip' cardDes='Funding For Rehab + Purchase' 
          cardList1='$50,000 up to $3,000,000' cardList2='Interest Rate 10.5%-12.99%' cardList3='Origination Fee From 1.5%' cardList4='Up to 85% of Purchase and 100% of Rehab'/>
          <LoanCard cardIcon={<Svg2/>} cardTitle='Rental Property' cardDes='30 Year DSCR loans in Florida and Texas' 
          cardList1='Up to $1,500,000' cardList2='Interest Rate 6.75%-8.25%' cardList3='Origination Fee From 1.5%' cardList4='Up to 85% of LTV'/>
          <LoanCard cardIcon={<Svg3/>} cardTitle='Ground Up Construction' cardDes='Ground Up Construction loans in Florida and Texas'
           cardList1='Up to $3,500,000' cardList2='Interest Rate 11.25%-13.25%' cardList3='Origination Fee From 1.5%' cardList4='Up to 80% of LTC'/>
          
        </div>
      </Container>
    </div>
  );
}

export default LoanProduct;

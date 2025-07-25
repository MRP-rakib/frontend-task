import React from 'react'
import WhyChooseUsCard from '../ui/WhyChooseUsCard'
import Container from '@/ui/Container'
import Btn from '@/ui/Btn'

function WhyChooseUsSection() {
  return (
    <div className='py-10 lg:py-[120px]'>
        <h2 className=' card3 text-2xl lg:text-[56px] font-extrabold text-primary text-center uppercase'>Why Choose Us</h2>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[37px] my-6 lg:my-[48px]'>
            <WhyChooseUsCard cardTitle='Simple Online Application' cartDec='Easy 2 minute online application, with no credit pull required.' image='/image1.png'/>
            <WhyChooseUsCard cardTitle='Simple Online Quick Turn Around' cartDec='Receive a Term Sheet within the hour.' image='/image2.png'/>
            <WhyChooseUsCard cardTitle='Simple Online Reliable Financing' cartDec='Integrity and honesty are the foundations of our business. When we commit to a loan, we make sure you close on time.' image='/image3.png'/>
        </div>
        <div className='flex items-center justify-center'>
            <Btn btnText='More About Us' className3='text-white'/>
        </div>
        </Container>
    </div>
  )
}

export default WhyChooseUsSection
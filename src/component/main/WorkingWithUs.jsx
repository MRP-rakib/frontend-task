import Container from '@/ui/Container'
import React from 'react'
import WorkingCard from '../ui/WorkingCard'

function WorkingWithUs() {
  return (
    <div className=' my-10 lg:my-[120px]'>
        <div className='text-primary text-center flex flex-col gap-4'>
            <h3 className='text-[22px] lg:text-[56px] font-extrabold uppercase'>
                Interested In Working With Us?
            </h3>
            <p className='text-black text-base lg:text-[24px]'>We work with real estate investors across the country every day. How can we help?</p>
        </div>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 mt-12'>
            <WorkingCard image='/icon1.png' title='Active Deal' des='I have an active deal and would like a Term Sheet'/>
            <WorkingCard image='/icon2.png' title='Pre-Approval' des='I’d like to to get pre-approved so I can find my next deal.'/>
            <WorkingCard image='/icon3.png' title='Schedule A Call' des='I’d like to schedule a call.'/>
          </div>
        </Container>
    </div>
  )
}

export default WorkingWithUs
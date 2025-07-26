import ClientSection from '@/component/main/ClientSection'
import GetStartSection from '@/component/main/GetStartSection'
import Hero from '@/component/main/Hero'
import LoanProduct from '@/component/main/LoanProduct'
import ProjectSection from '@/component/main/ProjectSection'
import ResourcesSection from '@/component/main/ResourcesSection'
import WhereLandSection from '@/component/main/WhereLandSection'
import WhyChooseUsSection from '@/component/main/WhyChooseUsSection'
import WorkingWithUs from '@/component/main/WorkingWithUs'
import React from 'react'

function HomePage() {
  return (
    <div>
      <Hero/>
      <LoanProduct/>
      <WhereLandSection/>
      <WhyChooseUsSection/>
      <div className='bg-primary mt-[466px] relative'>
        <ClientSection/>
        <ProjectSection/>
      </div>
      <WorkingWithUs/>
      <ResourcesSection/>
      <GetStartSection/>
    </div>
  )
}

export default HomePage
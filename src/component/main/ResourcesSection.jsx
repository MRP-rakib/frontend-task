import Btn2 from '@/ui/Btn2'
import Container from '@/ui/Container'
import React from 'react'
import ResourceCard from '../ui/ResourceCard'

function ResourcesSection() {
  return (
    <div className='my-10 lg:my-[96px]'>
        <Container>
            <div className='flex justify-between items-end'>
            <h3 className='text-2xl lg:text-[56px] font-extrabold text-primary max-w-[600px]'>
            Other Resources You’ll Like
        </h3>
        
            <Btn2 btnText='View More' className='bg-primary text-white uppercase'/>
        
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-[64px]'>
            <ResourceCard image='/resource1.png'/>
            <ResourceCard image='/resource2.png'/>
            <ResourceCard image='/resource3.png'/>
        </div>
        </Container>
    </div>
  )
}

export default ResourcesSection
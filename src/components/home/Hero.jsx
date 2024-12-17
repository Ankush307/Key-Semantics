import React from 'react'
import Header from '../../common/Header'
import CustomButton from '../../common/CustomButton'

const Hero = () => {
  return (
    <div className='bg-hero-image xl:min-h-[900px] 2xl:min-h-max bg-cover bg-no-repeat bg-center items-center flex flex-col'>
        <Header/>
        <div className="container mx-auto flex flex-col items-center justify-center px-5">
            <h1 className='text-[64px] text-darkBlue text-center max-w-[658px] leading-[72px] mx-auto font-bold max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl pt-[198px] max-lg:pt-16'>AI-Powered Search as a Service</h1>
            <p className='lg:text-2xl md:text-xl text-base font-medium leading-[32px] sm:pt-10 sm:pb-12 py-4 text-deep-blue text-center'>Unlock your content with KeySemantics.</p>
            <CustomButton buttonText='Get started' myClass="!bg-deep-blue sm:!text-base text-sm sm:!font-medium !text-white hover:!text-deep-blue hover:!bg-white lg:mb-[200px] mb-14 sm:w-[154px] sm:h-[60px] w-[113px] h-[44px] " />
        </div>
    </div>
  )
}

export default Hero
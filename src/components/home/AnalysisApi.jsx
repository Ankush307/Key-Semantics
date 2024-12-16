import React from 'react'
import infographyLottie from '../../lottie/infography.json';
import mobileInfographyLottie from '../../lottie/mobile.json'
import Lottie from 'lottie-react';

const AnalysisApi = () => {
    return (
        <section className='query-section'>
            <div className='container mx-auto'>
                <div>
                    <Lottie animationData={infographyLottie} loop={true} className='max-md:hidden shadow-[0px10px_40px_0px#41566B0D]' />
                    <Lottie animationData={mobileInfographyLottie} loop={true} className='md:hidden shadow-[0px10px_40px_0px#41566B0D]' />
                </div>
            </div>
        </section>
    )
}

export default AnalysisApi
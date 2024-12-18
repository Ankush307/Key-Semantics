import React from 'react'
import { KEY_SEMANTICS_WORK_LIST } from '../../utils/helper'
import SubHeading from '../../common/SubHeading'
import Lottie from 'lottie-react'

const KeySemanticsWork = () => {
    return (
        <div className='container mx-auto'>
            <div className='pt-24 max-xl:pt-20 max-lg:px-4 max-lg:pt-14 max-md:pt-10 max-sm:pt-7 flex items-center justify-center text-center'>
                <SubHeading text='How does KeySemantics work?' />
            </div>
            <div className='flex justify-evenly max-xl:flex-wrap mt-14 max-xl:mt-10 max-lg:mt-7 max-md:mt-5 max-md:gap-6'>
                {KEY_SEMANTICS_WORK_LIST.map((obj, i) => (
                    <div key={i}>
                        <Lottie animationData={obj.cardImg} loop={true} />
                        <p className='font-normal text-base text-darkBlue max-w-[285px] text-center pt-6 sm:pb-5 lg:pb-0'>{obj.discription}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default KeySemanticsWork
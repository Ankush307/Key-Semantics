import React from 'react'
import CustomButton from './CustomButton';
import SubHeading from './SubHeading';

const CardsSection = ({ CommonText, BtnText, CardsList, StafImg, MyClass }) => {
    return (
        <div className={`${MyClass} gap-12 max-lg:flex-wrap flex items-center max-lg:justify-center`}>
            <div className='w-6/12 max-lg:w-full'>
                <SubHeading text={CommonText} myClass="text-start" />
                <ul className=' list-disc translate-x-6'>
                    {CardsList.map((obj, i) => (<li className='text-base font-normal leading-[28px] text-deep-blue max-w-[552px] max-xl:max-w-none' key={i}>{obj}</li>))}
                </ul>
                <div className='w-[113px] mt-6'>
                    <CustomButton buttonText={BtnText} />
                </div>
            </div>
            <div className='w-6/12 max-lg:w-full'>
                <img src={StafImg} alt="keySemantics" className='w-full max-w-[600px] max-lg:mx-auto max-lg:max-w-none' />
            </div>
        </div>
    )
}

export default CardsSection
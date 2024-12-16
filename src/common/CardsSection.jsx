import React from 'react'
import CustomButton from './CustomButton';
import SubHeading from './SubHeading';

const CardsSection = ({ commonText, btnText, CardsList }) => {
    return (
        <div>
            <SubHeading text={commonText} myClass="text-start" />
            <ul className=' list-disc translate-x-4'>
                {CardsList.map((obj, i) => (
                    <li className='text-base font-normal leading-[28px] text-deep-blue max-w-[552px] max-xl:max-w-none'
                        key={i}>{obj}</li>
                ))}

            </ul>
            <div className='w-[113px] mt-6'>
                <CustomButton buttonText={btnText} />
            </div>
        </div>)
}

export default CardsSection
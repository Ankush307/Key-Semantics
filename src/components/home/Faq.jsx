import React, { useState } from 'react';
import CustomButton from '../../common/CustomButton';
import { FAQ_LIST, KEY_LIST } from '../../utils/helper';
import SubHeading from '../../common/SubHeading';

const Faq = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="bg-[#F7F9FB] max-xl:overflow-hidden">
            <div className='container xl:pt-[114px] lg:pt-20 md:pt-14 mx-auto px-5 lg:px-5 xl:px-0 max-w-[1200px]'>
                <div className='flex gap-12 max-xl:gap-9 max-md:gap-6 max-xl:flex-wrap max-xl:justify-center'>
                    <div className='w-6/12 max-xl:w-full relative'>
                        <img src="./assets/image/webp/faq-girl.webp" alt="working-girl"
                            className='w-full max-w-[600px] max-xl:mx-auto max-xl:max-w-none sticky top-0'/>
                    </div>
                    <div className='w-6/12 max-xl:w-full'>
                        <SubHeading text="Key Q&A" myClass="text-start" />
                        <ul className='translate-x-[18px]'>
                            {KEY_LIST.map((item, i) => (
                                <li className='list-disc text-bas font-normal text-deep-blue leading-[28px] max-xl:max-w-none  max-w-[552px]'
                                    key={i}> {item}
                                </li>
                            ))}
                        </ul>
                        <div className='mt-4 border-b border-ghost-gray'>
                            {FAQ_LIST.map((obj, i) => (
                                <div key={i} className='border-t border-solid border-ghost-gray py-4 border-collapse'>
                                    <div className='flex items-center justify-between cursor-pointer'
                                        onClick={() => toggleFAQ(i)}>
                                        <h3 className='text-lg text-deep-blue font-medium leading-[28px]'> {obj.title}</h3>
                                        <div>
                                            <p className={`transition-transform duration-300 ${expandedIndex === i ? 'rotate-180' : 'rotate-0'}`}>{obj.arrowImg}</p>
                                        </div>
                                    </div>
                                    {expandedIndex === i && (
                                        <div className="mt-4">
                                            <p className='text-base font-normal text-deep-blue leading-[28px] max-w-[552px] max-xl:max-w-none'>
                                                {obj.discriptionOne}
                                            </p>
                                            <p className='text-base font-normal text-deep-blue leading-[28px] max-w-[552px] pt-4 max-xl:max-w-none'>
                                                {obj.discriptionTwo}
                                            </p>
                                            <div className='flex items-center gap-4 my-4 max-sm:flex-col'>
                                                <img src={obj.imgOne} alt="key-semantics-img" />
                                                <img src={obj.imgTwo} alt="key-semantics-img" />
                                            </div>
                                            <p className='text-base font-normal text-deep-blue leading-[28px] max-w-[552px] max-xl:max-w-none'>
                                                {obj.discriptionThree}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className='w-[116px] mt-6'>
                            <CustomButton buttonText='Get a demo' myClass='!leading-[20px] px-[14.5px] py-[11px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;

import React from 'react';

const CustomButton = ({ buttonText , myClass }) => {
    return (
        <button className={`text-sm font-normal text-deep-blue leading-5 ${myClass} border-deep-blue px-[13px]  py-[11px] hover:bg-deep-blue hover:text-white transition-all duration-300 ease-linear border-[1px] rounded-[48px]`}>
            {buttonText}
        </button>
    );
}

export default CustomButton;

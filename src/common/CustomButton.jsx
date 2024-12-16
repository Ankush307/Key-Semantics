import React from 'react';

const CustomButton = ({ buttonText , myClass }) => {
    return (
        <button className={`text-sm font-normal leading-5 text-deep-blue ${myClass} border-deep-blue hover:bg-deep-blue hover:text-white transition-all duration-300 ease-linear border-[1px] rounded-[48px] px-4 py-3`}>
            {buttonText}
        </button>
    );
}

export default CustomButton;

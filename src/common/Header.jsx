import React from 'react'
import CustomButton from './CustomButton'

const Header = () => {
    return (
        <>
            <div className="container mx-auto flex items-center justify-between pt-12 max-sm:px-5">
                <img className='max-sm:max-w-[180px]' src="./assets/image/webp/page-logo.webp" alt="page logo" />
                <CustomButton buttonText='Request a demo' myClass="bg-white max-sm:!text-xs" />
            </div>
        </>
    )
}

export default Header
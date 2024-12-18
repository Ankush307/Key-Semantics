import React from 'react'
import CustomButton from './CustomButton'

const Header = () => {
    return (
        <>
            <div className="container mx-auto flex items-center justify-between md:pt-12 pt-6 max-xl:px-5">
                <a href="/"><img className='max-sm:max-w-[180px]' src="./assets/image/webp/page-logo.webp" alt="page logo" /></a>
                <CustomButton buttonText='Request a demo' myClass="bg-white max-sm:!text-xs" />
            </div>
        </>
    )
}

export default Header
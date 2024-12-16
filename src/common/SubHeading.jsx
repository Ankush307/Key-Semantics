import React from 'react'

const SubHeading = ({ text , myClass }) => {
    return (
        <h2 className={`font-bold text-[32px] leading-[72px] max-lg:text-3xl ${myClass} max-sm:text-2xl text-deep-blue text-center`} >{text}</h2>
    )
}

export default SubHeading
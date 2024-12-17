import React, { useState } from 'react'
import { FOOTER_LEFT_ICON, FOOTER_RIGHT_ICON } from '../utils/icon';
import CustomButton from './CustomButton';

const Footer = () => {
    const getFullYear = () => new Date().getFullYear();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, company, phone });
    };

    return (
        <footer className="bg-deep-blue h-full ">
            <div className="container relative mx-auto px-5 overflow-hidden">
                <p className="absolute top-0 left-0 max-sm:hidden">
                    <FOOTER_LEFT_ICON />
                </p>
                <div className="flex items-center justify-center flex-col">
                    <h2 className="text-white font-bold text-[32px] text-center leading-[72px] max-lg:text-3xl max-md:text-2xl pt-24 max-xl:pt-20 max-lg:pt-16 max-md:pt-10 max-sm:pt-6">
                        How does KeySemantics work?
                    </h2>
                    <p className="font-normal text-base text-center text-white leading-[28px] pt-2 relative z-20">
                        Request a demo for your team and let us show you how KeySemantics can help your company
                    </p>
                    <form
                        className="flex items-center justify-center flex-col mt-[64px] max-xl:mt-11 max-lg:mt-8 max-md:mt-5"
                        onSubmit={handleSubmit}>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text"
                            className="bg-[#24254B] w-[320px] mx-auto py-4 px-5 rounded-full outline-none placeholder:text-lavender-purple text-lavender-purple font-normal placeholder:font-normal text-sm placeholder:text-sm leading-[20px]" placeholder="Name" />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required
                            className="bg-[#24254B] w-[320px] mx-auto py-4 px-5 rounded-full outline-none placeholder:text-lavender-purple text-lavender-purple font-normal placeholder:font-normal text-sm placeholder:text-sm leading-[20px] mt-2" />
                        <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" type="text"
                            className="bg-[#24254B] w-[320px] mx-auto py-4 px-5 rounded-full outline-none placeholder:text-lavender-purple text-lavender-purple font-normal placeholder:font-normal text-sm placeholder:text-sm leading-[20px] mt-2" />
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Phone (optional)"
                            className="bg-[#24254B] w-[320px] mx-auto py-4 px-5 rounded-full outline-none  placeholder:text-lavender-purple text-lavender-purple font-normal placeholder:font-normal text-sm placeholder:text-sm leading-[20px] mt-2" />
                        <p className="text-[10px] font-normal leading-[14px] text-center text-lavender-purple pt-4 pb-6">
                            By submitting my contact information I agree to the KeySemantics Privacy Policy
                        </p>
                        <CustomButton buttonText="Request a demo" myClass="!font-medium traking-[-1%] leading-[20px] text-sm bg-sky-blue !text-white sm:mb-14 mb-6 lg:mb-24 hover:!bg-white hover:!text-deep-blue transition-all duration-300 ease-linear py-[15px] px-9" type="submit" />
                    </form>
                </div>
                <p className="absolute bottom-0 right-0 max-sm:hidden">
                    <FOOTER_RIGHT_ICON />
                </p>
            </div>
            <div className="bg-[#111235] p-6">
                <div className="container flex items-center justify-between max-sm:flex-col max-sm:justify-center mx-auto">
                    <p className="text-xs font-normal text-lavender-purple leading-[28px] max-sm:text-center">
                        ©<span>{getFullYear()}</span> KeySemantics GmbH | Ramsenburgweg 24, 9100 Herisau, Switzerland
                    </p>
                    <p className="text-xs font-normal text-lavender-purple leading-[28px]">info@keysemantics.ch</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

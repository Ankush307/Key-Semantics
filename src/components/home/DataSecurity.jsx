import React from 'react';
import { SECURITY_LIST } from '../../utils/helper';
import CardsSection from '../../common/CardsSection';

const DataSecurity = () => {
    return (
        <section className="bg-light-gray">
            <div className="container pb-[164px] max-xl:pb-32 max-lg:pb-24 max-md:pb-16 max-sm:pb-10 px-5 mx-auto">
                <div className="flex items-center max-lg:flex-col gap-12 max-lg:justify-center max-w-[1920px] mx-auto">
                    <div className="lg:w-6/12 w-full">
                        <img
                            src="./assets/image/png/data-security-card.png"
                            alt="Data Security"
                            className="w-full max-lg:max-w-none max-w-[600px] max-lg:mx-auto" />
                    </div>
                    <div className="lg:w-6/12 w-full">
                        <CardsSection
                            commonText="Data Security and Hosting"
                            CardsList={SECURITY_LIST}
                            btnText="Get a Demo" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataSecurity;

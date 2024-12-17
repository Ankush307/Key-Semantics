import React from 'react';
import { SECURITY_LIST } from '../../utils/helper';
import CardsSection from '../../common/CardsSection';

const DataSecurity = () => {
    return (
        <section className='bg-light-gray'>
            <div className='container pb-[164px] max-xl:pb-32 max-lg:pb-24 max-md:pb-16 max-sm:pb-10 mx-auto px-6'>
                <CardsSection CommonText="Data Security and Hosting" CardsList={SECURITY_LIST} BtnText="Get a Demo" StafImg='./assets/image/png/data-security-card.png' MyClass='flex-row-reverse'/>
            </div>
        </section>
    );
};

export default DataSecurity;
import React from 'react'
import { HEADLESS_LIST } from '../../utils/helper'
import CardsSection from '../../common/CardsSection';

const HeadlessSearch = () => {
    return (
        <section className='bg-light-gray'>
            <div className='container py-[148px] max-xl:py-32 max-lg:py-24 max-md:py-16 max-sm:py-10 mx-auto px-6'>
                <CardsSection CommonText="Headless federated search" CardsList={HEADLESS_LIST} BtnText="Get a Demo" StafImg='./assets/image/png/federated-card-img.png'  />
            </div>
        </section>
    )
}

export default HeadlessSearch
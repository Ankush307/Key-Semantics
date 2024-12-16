import React from 'react'
import { HEADLESS_LIST } from '../../utils/helper'
import CardsSection from '../../common/CardsSection';

const HeadlessSearch = () => {
    return (
        <section className='bg-light-gray'>
            <div className='container py-[148px] max-xl:py-32 max-lg:py-24 max-md:py-16 max-sm:py-10 px-5 mx-auto'>
                <div className='flex items-center gap-12 max-lg:flex-wrap max-lg:justify-center max-xl:flex-col-reverse'>
                    <div className='w-6/12 max-lg:w-full'>
                        <CardsSection
                            commonText="Headless federated search"
                            CardsList={HEADLESS_LIST}
                            btnText="Get a Demo" />
                    </div>
                    <div className='w-6/12 max-lg:w-full'>
                        <img src="./assets/image/png/federated-card-img.png" alt="fedrate-Search" className='w-full max-w-[600px] max-lg:mx-auto max-lg:max-w-none' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeadlessSearch
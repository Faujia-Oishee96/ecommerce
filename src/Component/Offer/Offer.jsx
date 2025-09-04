import React from 'react'
import Container from '../Layout/Container'
import Countdown from 'react-countdown';
import renderTime from './renderTime';


const Offer = () => {
  return (
    <div className='mb-[161px]'>
        <Container>
            <div className='bg-[url(./assets/bgBanner.png)] py-[69px] bg-cover bg-no-repeat bg-center'>
               <div className='pl-[56px]'>

                <p className='font-primary font-semibold text-[#00FF66]'>Categories</p>
                <h2 className='font-secondary font-semibold text-[48px] text-white w-[423px] leading[60px] mt-8'>Enhance Your Music Experience</h2>

                <div>
                <Countdown
                 date={Date.now() + 10800000} 
                 renderer={renderTime}
                />,
                </div>

                <div>
                    <button className='font-primary text-white bg-[#00FF66] rounded py-4 px-12 mt-[40px]'>Buy Now!</button>
                </div>

               </div>
            </div>
        </Container>
    </div>
  )
}

export default Offer
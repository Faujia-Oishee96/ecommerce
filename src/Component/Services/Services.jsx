import React from 'react'
import Container from '../Layout/Container'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'

const Services = () => {
  return (
    <div className='mb-[167px]'>
        <Container>
            <div className='flex justify-center gap-x-[88px]'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={service1} alt="" />
                    <p className='font-primary font-semibold text-[20px] pt-6 pb-2'>FREE AND FAST DELIVERY</p>
                    <p className='font-primary font-normal text-[14px]'>Free delivery for all orders over $140</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={service2} alt="" />
                    <p className='font-primary font-semibold text-[20px] pt-6 pb-2'>24/7 CUSTOMER SERVICE</p>
                    <p className='font-primary font-normal text-[14px]'>Friendly 24/7 customer support</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={service3} alt="" />
                    <p className='font-primary font-semibold text-[20px] pt-6 pb-2'>MONEY BACK GUARANTEE</p>
                    <p className='font-primary font-normal text-[14px]'>We reurn money within 30 days</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Services
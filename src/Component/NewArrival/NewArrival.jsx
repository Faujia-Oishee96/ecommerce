import React from 'react'
import Container from '../Layout/Container'
import playStation from '../../assets/productPlay.png'
import Women from '../../assets/productWomen.png'
import speaker from '../../assets/productSpeaker.png'
import perfume from '../../assets/productPerfume.png'

const NewArrival = () => {
  return (
    <div className='mb-[182px]'>
        <Container>
             {/*-------------------- Title part ---------------------*/}
                  {/*-------first Title ------*/}
                 <div className='flex items-center gap-x-4'>
                    <div className='h-[40px] w-[20px] bg-primary rounded '></div>
                    <div><p className='text-primary font-primary font-semibold'>Featured</p></div>
                 </div>
                 {/* --------------second title------------- */}
                 <div className='pt-5'>
                    <h3 className='font-secondary font-semibold text-[36px]'>Browse By Category</h3>
                 </div>
                 {/* --------------------image part------------- */}
                 <div className='flex justify-between mt-15'>
                    <div><img src={playStation} alt="" /></div>
                    <div>
                        <div><img src={Women} alt="" /></div>
                        <div className='flex justify-between pt-8'>
                            <div><img src={speaker} alt="" /></div>
                            <div><img src={perfume} alt="" /></div>
                        </div>
                    </div>
                 </div>
        </Container>
    </div>
  )
}

export default NewArrival
import React, { useState } from 'react'
import Container from '../Layout/Container'
import jacket from '../../assets/jacket.png'
// import bag from '../../assets/bag.png'
// import speaker from '../../assets/speaker.png'
// import table from '../../assets/table.png'

import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { HiOutlineEye } from "react-icons/hi";

const ExploreProduct = () => {
    const[visible, setVisible] = useState(4)
    const products = [
        {
            name:"The north Court",
            price:"$260",
            ratingNumber:"233",
            image:jacket

        },
        {
            name:"The north Court",
            price:"$260",
            ratingNumber:"233",
            image:jacket

        },
        {
            name:"The north Court",
            price:"$260",
            ratingNumber:"233",
            image:jacket

        },
        {
            name:"Gucchi bag",
            price:"$260",
            ratingNumber:"233",
            image: jacket

        },
        {
            name:"Awsome speaker",
            price:"$260",
            ratingNumber:"233",
            image: jacket

        },
        {
            name:"Shelf Table",
            price:"$260",
            ratingNumber:"233",
            image: jacket

        },
        {
            name:"The north Court",
            price:"$260",
            ratingNumber:"233",
            image: jacket 

        },
        {
            name:"The north Court",
            price:"$260",
            ratingNumber:"233",
            image: jacket

        },
        {
            name:"The north Court",
            price:"$260",
            ratingNumber:"233",
            image: jacket

        },
        {
            name:"The north Court",
            price:"$260",
            ratingNumber:"233",
            image: jacket

        },
        {
            name:"The north Court",
            price:"$260",
            ratingNumber:"233",
            image: jacket

        },
        {
            name:"The north Court",
            price:"$260",
            ratingNumber:"233",
            image: jacket

        }
    ]
   const handleLoadData =()=>{
                setVisible((prev)=>prev+4)
   }

  return (
      <div className='pb-[122px]'>
       <Container>
        <div className='border-t border-[#D9D9D9] pt-[27px]'>
                  {/*--------------------- Title one ---------------*/}
           <div className='flex items-center gap-x-4'>
                    <div className='h-[40px] w-[20px] bg-primary rounded '></div>
                    <div><p className='text-primary font-primary font-semibold'>Our Products</p></div>
                 </div>
                  {/*----------------- title two -----------------*/}
                 <div className='pt-5'>
                   <div className='flex justify-between items-center'>
                    <h3 className='font-secondary font-semibold text-[36px] text-black'>Explore Our Products</h3>
                   
                   </div>
                 
                 </div>

                 {/*----------------- card section ----------------*/}
                <div className='flex flex-wrap justify-between mt-15'>
                   {/* ------card one------ */}
                 {
                    products.slice(0,visible).map((product)=>(
                        <div className=' relative w-[270px]'>
                  {/*----------icon part------------- */}
                  <div className='absolute top-3 right-3 z-[999]'>
                    {/* ------icon one------ */}
                    <div className='bg-white w-[34px] h-[34px] rounded-full flex justify-center items-center'>
                         <CiHeart size={20} />
                    </div>
                    {/* ------icon two------ */}
                    <div className='bg-white w-[34px] h-[34px] rounded-full flex justify-center items-center mt-2'>
                        <HiOutlineEye size={20} />
                     </div>
                  </div>
                  {/*------------ image part ----------*/}
                  <div className='relative group bg-[#F5F5F5] py-[52px] px-[65px] rounded'>
                     <img src={product.image} alt="" />
                     <div><p className='absolute right-0 bottom-0 w-full font-primary font-medium bg-black py-2 px-[87px] text-white text-center hidden group-hover:block'>Add to cart</p></div>
                  </div>
                  {/*------------- text part ----------*/}
                  <div className='mt-4'>
                    <p className='font-primary font-medium'>{product.name}</p>
                    <p className='py-2 text-primary'>{product.price} <del className='text-[#808080]'>$360</del></p>
                      <div className='flex items-center'>
                    <FaStar className='text-[#FFAD33]'/>
                    <FaStar className='text-[#FFAD33]'/>
                    <FaStar className='text-[#FFAD33]'/>
                    <FaStar className='text-[#FFAD33]'/>
                    <FaStar className='text-[#FFAD33]'/>
                    <p className='ml-2'>(65)</p>
                  </div>
                  </div>
                
                 </div>
                    ))
                 }
                 
                </div>
                <div className='text-center mt-[76px]'>
                    <button onClick={handleLoadData} className='font-primary text-medium py-4 px-12 bg-primary text-white rounded '>View All Products</button>
                   </div>
        </div>
       </Container>
    </div>
  )
}

export default ExploreProduct
import React from 'react'
import Container from '../Layout/Container'
import jacket from '../../assets/jacket.png'
import bag from '../../assets/bag.png'
import speaker from '../../assets/speaker.png'
import table from '../../assets/table.png'

import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { HiOutlineEye } from "react-icons/hi";




const BestSellingProducts = () => {
  return (
    <div className='pb-[122px]'>
       <Container>
        <div className='border-t border-[#D9D9D9] pt-[27px]'>
                  {/*--------------------- Title one ---------------*/}
           <div className='flex items-center gap-x-4'>
                    <div className='h-[40px] w-[20px] bg-primary rounded '></div>
                    <div><p className='text-primary font-primary font-semibold'>This Month</p></div>
                 </div>
                  {/*----------------- title two -----------------*/}
                 <div className='pt-5'>
                   <div className='flex justify-between items-center'>
                    <h3 className='font-secondary font-semibold text-[36px] text-black'>Best Selling Products</h3>
                   <div>
                    <button className='font-primary text-medium py-4 px-12 bg-primary text-white rounded '>View All</button>
                   </div>
                   </div>
                 
                 </div>

                 {/*----------------- card section ----------------*/}
                <div className='flex justify-between mt-15'>
                   {/* ------card one------ */}
                 <div className=' relative w-[270px]'>
                  {/*----------icon part------------- */}
                  <div className='absolute top-3 right-3'>
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
                  <div className='bg-[#F5F5F5] py-[52px] px-[65px] rounded'>
                     <img src={jacket} alt="" />
                  </div>
                  {/*------------- text part ----------*/}
                  <div className='mt-4'>
                    <p className='font-primary font-medium'>The north coat</p>
                    <p className='py-2 text-primary'>$260 <del className='text-[#808080]'>$360</del></p>
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
                 {/* ------card two------ */}
                 <div className=' relative w-[270px]'>
                  {/*----------icon part------------- */}
                  <div className='absolute top-3 right-3'>
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
                  <div className='bg-[#F5F5F5] py-[60px] px-[46px] rounded'>
                     <img src={bag} alt="" />
                  </div>
                  {/*------------- text part ----------*/}
                  <div className='mt-4'>
                    <p className='font-primary font-medium'>Gucci duffle bag</p>
                    <p className='py-2 text-primary'>$960 <del className='text-[#808080]'>$1160</del></p>
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
                 {/* ------card three------ */}
                 <div className=' relative w-[270px]'>
                  {/*----------icon part------------- */}
                  <div className='absolute top-3 right-3'>
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
                  <div className='bg-[#F5F5F5] py-[76px] px-[40px] rounded'>
                     <img src={speaker} alt="" />
                  </div>
                  {/*------------- text part ----------*/}
                  <div className='mt-4'>
                    <p className='font-primary font-medium'>RGB liquid CPU Cooler</p>
                    <p className='py-2 text-primary'>$160 <del className='text-[#808080]'>$170</del></p>
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
                 {/* ------card four------ */}
                 <div className=' relative w-[270px]'>
                  {/*----------icon part------------- */}
                  <div className='absolute top-3 right-3'>
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
                  <div className='bg-[#F5F5F5] py-[36px] px-[65px] rounded'>
                     <img src={table} alt="" />
                  </div>
                  {/*------------- text part ----------*/}
                  <div className='mt-4'>
                    <p className='font-primary font-medium'>Small BookSelf</p>
                    <p className='py-2 text-primary'>$360</p>
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
                </div>
        </div>
       </Container>
    </div>
  )
}

export default BestSellingProducts
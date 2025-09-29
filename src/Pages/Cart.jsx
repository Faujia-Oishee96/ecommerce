import React from 'react'
import Container from '../Component/Layout/Container'
import cartImg from '../assets/remote.png'
import { FaChevronUp,FaChevronDown } from "react-icons/fa";



const Cart = () => {
  return (
    <div className='py-20 font-primary'>
        <Container>
            <div className='flex justify-between py-6 px-10 shadow-[0_1px_13px_rgba(0,0,0,0.1)] rounded mb-10'>
                <div className='w-25%'>Product</div>
                <div className='w-25%'>Price</div>
                <div className='w-25%'>Quantity</div>
                <div className='w-25%'>Subtotal</div>
            </div>

            <div className='flex justify-between py-6 px-10 shadow-[0_1px_13px_rgba(0,0,0,0.1)] rounded mb-10'>
                <div className='w-25% flex items-center gap-x-5'>
                    <img className='w-[54px]' src={cartImg} alt="" />
                    <p>Remote</p>
                </div>
                <div className='w-25%'>Price</div>
                <div className='w-25%'>
                    <div className='border rounded inline-block py-[10px] px-3'>
                       <div className='flex items-center gap-x-2'>
                         <p>10</p>
                        <div>
                            <FaChevronUp />
                            <FaChevronDown />
                        </div>
                       </div>
                    </div>
                </div>
                   <div className='w-25%'>$650</div>
                 </div>

            <div className='flex justify-between py-6 px-10 shadow-[0_1px_13px_rgba(0,0,0,0.1)] rounded mb-10'>
                <div className='w-25% flex items-center gap-x-5'>
                    <img className='w-[54px]' src={cartImg} alt="" />
                    <p>Remote</p>
                </div>
                <div className='w-25%'>Price</div>
                <div className='w-25%'>
                    <div className='border rounded inline-block py-[10px] px-3'>
                       <div className='flex items-center gap-x-2'>
                         <p>10</p>
                        <div>
                            <FaChevronUp />
                            <FaChevronDown />
                        </div>
                       </div>
                    </div>
                </div>
                   <div className='w-25%'>$650</div>
                 </div>

           <div className='flex justify-between'>
            <div>
                <input className='border py-4 rounded' type="text" placeholder='Coupon Code' />
                 <button className='ml-4 font-semibold text-[16px] px-[48px] py-4 bg-[#DB4444]
             text-white rounded'
            >Apply Coupon</button>
            </div>

            <div className='w-[470px] border py-8 px-6'>
                <p className='text-[20px] font-semibold'>Cart Total</p>
                <div className='flex justify-between items-center border-b py-4'>
                    <p>Subtotal:</p>
                    <p>$90</p>
                </div>
                <div className='flex justify-between items-center py-4'>
                    <p>Total:</p>
                    <p>$90</p>
                </div>
           <div className='text-center'>
                 <button className='text-center ml-4 font-semibold text-[16px] px-[48px] py-4 bg-[#DB4444]
             text-white rounded'
            >Process to checkout</button>
           </div>
            </div>
            
           </div>

        </Container>
    </div>
  )
}

export default Cart
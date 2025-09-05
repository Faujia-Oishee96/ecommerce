import React from 'react'
import logo from '../../assets/logo.png'
import { CiSearch,CiHeart,CiShoppingCart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import Container from '../Layout/Container';
import { Link } from 'react-router';



const Navbar = () => {
  return (
   <nav className='pt-[42px] pb-[14px] border-b border-[#D9D9D9]'>
     <Container>
        <div className='flex items-center'>
        {/*----------- logo part ------------*/}
        <div className='w-[20%]'>
            <img src={logo} alt="" />
        </div>
       {/*----------- logo end -----------*/}

        {/*----------- list part -------------*/}
        <div className='w-[40%] font-primary text-base'>
            <ul className='flex gap-x-[48px]'>
                <li> <Link to ="/">Home</Link> </li>
                <li> <Link to ="/product">Product</Link> </li>
                <li> <Link to ="">Contact</Link> </li>
                <li> <Link to ="">About</Link> </li>
                <li> <Link to ="">SignUp</Link> </li>
            </ul>
        </div>
        {/*-------------- list end ----------*/}

        {/*-------------- Search part --------------*/}
        <div className='w-[40%] flex items-center justify-end gap-x-4'>
            <div className='w-[243px] relative'>
                <input className='w-full bg-[#F5F5F5] outline-0 rounded-sm py-[7px] pl-5 pr-10 placeholder:font-primary placeholder:text-sm' type="text" placeholder='What are you looking for?' />
                <CiSearch size={24} className='absolute top-[7px] right-[12px] font-bold' />
            </div>
            <CiHeart size={24} className='font-bold' />
            <CiShoppingCart size={24} className='font-bold' />
             <GoPerson size={24} className='font-bold' />
        </div>
        {/*------------- search end ----------------*/}

        </div>
    </Container>
   </nav>
  )
}

export default Navbar
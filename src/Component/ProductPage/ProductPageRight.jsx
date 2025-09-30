import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { HiOutlineEye } from "react-icons/hi";
import ProductRating from './ProductRating';
import {Link} from 'react-router';

const ProductPageRight = () => {

const [productData, setProductData] = useState([])
const [currentPage, setCurrentPage] = useState(1)

   useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=> res.json())
    .then((data)=> setProductData(data.products)
    )
   },[])
    

   // -------------showing data according to product per page--------------
     const totalProduct = productData.length
    const productPerPage =6
    const totalPages = Math.ceil(totalProduct/productPerPage)
    const indexOfLastProduct = currentPage * productPerPage
    const indexOfFirstProduct = indexOfLastProduct - productPerPage
    const currentProduct = productData.slice(indexOfFirstProduct, indexOfLastProduct)

               //  -----showing for pages 1 2 3 ...-------
    const data = [...Array(totalPages).keys()].map((index)=>index+1)
  
    const[filterProductData, setFilterProductData]= useState([])
   const handleSearch = (e)=>{
      let arr = []
     if(e.target.value.length == 0){
          setFilterProductData([])
     }else{
       productData.filter((product)=>{
         if(product.title.toLowerCase().includes(e.target.value.toLowerCase())){
            arr.push(product)
            setFilterProductData(arr)
         }
      })
     }
   }

  return (
    <div>
            {/* ------------Search part------------- */}
                <input onChange={handleSearch} className='border ml-[400px] py-1 w-[200px] rounded' type="text" placeholder='Search' />

                 {/* --------------card-------------- */}
                    <div className='flex flex-wrap justify-between mt-15'>
                     
                     {
                        filterProductData.length > 0
                        ?
                         filterProductData.map((product)=>(
                            <Link to = {`/product/${product.id}`} className=' relative w-[270px] pb-10'>
                     
                      <div className='absolute top-3 right-3 z-[999]'>
                       
                        <div className='bg-white w-[34px] h-[34px] rounded-full flex justify-center items-center'>
                             <CiHeart size={20} />
                        </div>
                        
                        <div className='bg-white w-[34px] h-[34px] rounded-full flex justify-center items-center mt-2'>
                            <HiOutlineEye size={20} />
                         </div>
                      </div>
                      {/*------------ image part ----------*/}
                      <div className='relative group bg-[#F5F5F5] py-[52px] px-[65px] rounded'>
                         <img src={product.thumbnail} alt="" />
                         <div><p className='absolute right-0 bottom-0 w-full font-primary font-medium bg-black py-2 px-[87px] text-white text-center hidden group-hover:block'>Add to cart</p></div>
                      </div>
                      {/*------------- text part ----------*/}
                      <div className='mt-4'>
                        <p className='font-primary font-medium'>{product.title}</p>
                        <p className='py-2 text-primary'>{product.price} <del className='text-[#808080]'>$360</del></p>
                      
                        <ProductRating rating = {product.rating}/>
                        </div>
                    
                     </Link>
                        ))
                        :
                        currentProduct.map((product)=>(
                            <Link to = {`/product/${product.id}`} className=' relative w-[270px] pb-10'>
                     
                      <div className='absolute top-3 right-3 z-[999]'>
                       
                        <div className='bg-white w-[34px] h-[34px] rounded-full flex justify-center items-center'>
                             <CiHeart size={20} />
                        </div>
                        
                        <div className='bg-white w-[34px] h-[34px] rounded-full flex justify-center items-center mt-2'>
                            <HiOutlineEye size={20} />
                         </div>
                      </div>
                      {/*------------ image part ----------*/}
                      <div className='relative group bg-[#F5F5F5] py-[52px] px-[65px] rounded'>
                         <img src={product.thumbnail} alt="" />
                         <div><p className='absolute right-0 bottom-0 w-full font-primary font-medium bg-black py-2 px-[87px] text-white text-center hidden group-hover:block'>Add to cart</p></div>
                      </div>
                      {/*------------- text part ----------*/}
                      <div className='mt-4'>
                        <p className='font-primary font-medium'>{product.title}</p>
                        <p className='py-2 text-primary'>{product.price} <del className='text-[#808080]'>$360</del></p>
                      
                        <ProductRating rating = {product.rating}/>
                        </div>
                    
                     </Link>
                        ))
                     }
                     
                    </div>


                    {/* --------------pagination----------- */}
      
                      <div className='flex gap-x-[10px]'>
                      {
                          data.map((item)=>(

                                 <div onClick={()=>setCurrentPage(item)} className= {`py-1 
                                 px-[15px] font-primary cursor-pointer rounded ${currentPage === item ? "bg-black text-white" : "bg-gray-300 text-black"}`}>
                                    {item}</div>
                          )) 
                     }
                    </div>
                   
                    </div>
  )
}

export default ProductPageRight
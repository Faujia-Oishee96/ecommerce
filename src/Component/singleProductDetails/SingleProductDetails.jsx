import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
// import mainImg from '../../assets/remote.png'
// import image1 from '../../assets/remote2.png'
// import image2 from '../../assets/remote3.png'
// import image3 from '../../assets/remote4.png'
// import image4 from '../../assets/remote5.png'
import { useParams } from 'react-router'
import SingleProductRating from './SingleProductRating'
import { useDispatch } from 'react-redux'
import { cartTotal } from '../../Slices/CartSlice'
import { Bounce, ToastContainer, toast } from 'react-toastify';

const SingleProductDetails = () => {
  
  const {id} = useParams();
  const dispatch = useDispatch()
  const [productData, setProductData] = useState([])
  const [selectedImg, setSelectedImg] =useState()


   useEffect(()=>{
      fetch("https://dummyjson.com/products")
      .then((res)=> res.json())
      .then((data)=> setProductData(data.products)
      )
     },[])

     const singleProduct = productData.find((product)=>product.id == id);

     useEffect(()=>{
      if(singleProduct?.thumbnail){
        setSelectedImg(singleProduct?.thumbnail)
      }
     },[singleProduct])

      const handleAddToCart = (product) => {
        dispatch(cartTotal(product))
        toast.success("Add To Cart")
       
    }


  return (
    <div className='py-10'>
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
      <Container>
        <div className='grid grid-cols-12 row space-x-[30px]'>

          <div className='col-span-2'>
            <div className='flex flex-col gap-y-8'>
               

              {
                singleProduct?.images?.map((img)=>(
                   <div className='bg-[#F5F5F5] py-3 px-5 rounded'>
                <img onClick={(()=>setSelectedImg(img))} src={img} alt="" />
               </div>
                ))
              }
              </div>
           </div>

          <div className='col-span-6'>
           <div className='pt-[133px] pb-[152px] px-[27px] bg-[#F5F5F5] rounded'>
             <img className='h-[300px] mx-auto' src={selectedImg} alt="" />
             </div>
          </div>

          <div className='col-span-4'>
            <h2 className='font-secondary font-semibold text-[24px] mb-4'>{singleProduct?.title}</h2>
           <div className='flex items-center gap-x-2'>
            <SingleProductRating rating={singleProduct?.rating}/>
            <p className='font-primary'>({singleProduct?.reviews.length} reviews) | <span className='text-[#00FF66]'>In Stocks</span></p> 
           </div>
            <p className='font-primary mb-6 mt-4 text-[24px]'>${singleProduct?.price}</p>
            <p className='font-primary pb-4 leading-[24px]'>{singleProduct?.description}</p>
            <div className='border-t border-gray-400 pb-4'></div>
            <div className='flex gap-x-4 items-center pb-6'>
              <p className='font-secondary text-[20px]'>Size:</p>
              <p className=' font-primary text-[14px] font-medium border border-gray-400 rounded  
              px-[6px] py-[6px] cursor-pointer hover:bg-[#DB4444] hover:text-white'>XS</p>
              <p className=' font-primary text-[14px] font-medium border border-gray-400 rounded  
              px-[12px] py-[6px] cursor-pointer  hover:bg-[#DB4444] hover:text-white'>S</p>
              <p className=' font-primary text-[14px] font-medium border border-gray-400 rounded  
              px-[12px] py-[6px] cursor-pointer  hover:bg-[#DB4444] hover:text-white'>M</p>
              <p className=' font-primary text-[14px] font-medium border border-gray-400 rounded  
              px-[12px] py-[6px] cursor-pointer  hover:bg-[#DB4444] hover:text-white'>L</p>
              <p className=' font-primary text-[14px] font-medium border border-gray-400 rounded  
              px-[6px] py-[6px] cursor-pointer  hover:bg-[#DB4444] hover:text-white'>XL</p>
            </div>
           <div>
             <button onClick={() => handleAddToCart(singleProduct)} className=' font-semibold text-[14px] px-[48px] py-[10px] bg-[#DB4444]
             text-white rounded'
            >Add to Cart</button>
           </div>

          </div>
        </div>


        <div>

        </div>
      </Container>
    </div>
  )
}

export default SingleProductDetails
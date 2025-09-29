import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { ImStarEmpty } from "react-icons/im";


const SingleProductRating = ({rating}) => {
    // console.log(rating);
     

    const fullRating = Math.floor(rating) || 0
    const halfRating = rating % 1 >= 0.5
    const emptyRating = 5- fullRating- (halfRating ? 1 : 0)

  return (
    <div className='flex items-center'>
        {
            [...Array(fullRating)].map(()=>(
             <FaStar className='text-[#FFAD33]'/>

            ))
        }
        {
            halfRating &&  < FaRegStarHalfStroke className='text-[#FFAD33]'/>
        }
         {
            [...Array(emptyRating)].map(()=>(
             <ImStarEmpty/>

            ))
        }
        <p className='ml-2'>({rating})</p>

    </div>
  )
}


export default SingleProductRating
import React from 'react'
import Container from '../Component/Layout/Container'
import ProductPageLeft from '../Component/ProductPage/ProductPageLeft'
import ProductPageRight from '../Component/ProductPage/ProductPageRight'

const Product = () => {
  return (
        <Container>
            <div  className=' flex py-32'>
                    <div className='w-[30%]'>
                         <ProductPageLeft/>
                    </div>
                    <div className='w-70%'>
                         <ProductPageRight/>
                    </div>
            </div>
        </Container>

  )
}

export default Product
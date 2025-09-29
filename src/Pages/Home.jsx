import React from 'react'

import Banner from '../Component/Banner/Banner'
import Categories from '../Component/Categories/Categories'
import BestSellingProducts from '../Component/BestSellingProducts/BestSellingProducts'
import Offer from '../Component/Offer/Offer'
import ExploreProduct from '../Component/ExploreProduct/ExploreProduct'
import NewArrival from '../Component/NewArrival/NewArrival'
import Services from '../Component/Services/Services'


const Home = () => {
  return (
    <>
    
    <Banner/>
    <Categories/>
    <BestSellingProducts/>
    <Offer/>
    <ExploreProduct/>
    <NewArrival/>
    <Services/>
    
    </>
  )
}

export default Home
import React from 'react'
import Header from '../Component/Header/Header'
import Navbar from '../Component/Navbar/Navbar'
import Banner from '../Component/Banner/Banner'
import Categories from '../Component/Categories/Categories'
import BestSellingProducts from '../Component/BestSellingProducts/BestSellingProducts'
import Offer from '../Component/Offer/Offer'
import ExploreProduct from '../Component/ExploreProduct/ExploreProduct'
import NewArrival from '../Component/NewArrival/NewArrival'


const Home = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Banner/>
    <Categories/>
    <BestSellingProducts/>
    <Offer/>
    <ExploreProduct/>
    <NewArrival/>
    </>
  )
}

export default Home
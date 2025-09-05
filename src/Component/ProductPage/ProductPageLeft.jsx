import React from 'react'

const ProductPageLeft = () => {

     const categoriesData =[
        {name: "Woman’s Fashion"},
        {name: "Men’s Fashion"},
        {name: "Electronics"},
        {name: "Home & Lifestyle"},
        {name: "Medicine"},
        {name: "Sports & Outdoor"},
        {name: "Baby’s & Toys"},
        {name: "Groceries & Pets"},
        {name: "Health & Beauty"}
        ]

  return (
    <div>
        <h2 className='font-primary font-bold text-[20px]'>Shop By Category</h2>
         <div className='mt-[15px]'>
            {categoriesData.map((category)=>(
          <p className='font-primary mb-4 w-[300px]'>{category.name}</p>
        ))}
         </div>

         <h2 className='font-primary font-bold text-[20px] pt-[40px] pb-[15px]'>Shop By Color</h2>
         <div className='flex items-center mb-[18px]'>
            <div className='w-[11px] h-[11px] rounded-full bg-black'></div>
            <span className='ml-[10px] font-primary'>Color 1</span>
         </div>
         <div className='flex items-center mb-[18px]'>
            <div className='w-[11px] h-[11px] rounded-full bg-red-600'></div>
            <span className='ml-[10px] font-primary'>Color 2</span>
         </div>
         <div className='flex items-center'>
            <div className='w-[11px] h-[11px] rounded-full bg-green-600'></div>
            <span className='ml-[10px] font-primary'>Color 3</span>
         </div>
    </div>
  )
}

export default ProductPageLeft
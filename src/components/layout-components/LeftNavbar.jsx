import React, { useEffect, useState } from 'react';

const LeftNavbar = () => {
    const [category, setCategory]=useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategory(data.data.news_category))
    },[])
    console.log(category);
    
    return (
        <div>
          <h2 className='font-semibold'>All Caterogy{category.length}</h2>  
          <div className='flex flex-col gap-4'>
            {
                category.map((category, index )=> <button className='btn' key={index}>{category.category_name}</button>)
            }
          </div>
        </div>
    );
};

export default LeftNavbar;
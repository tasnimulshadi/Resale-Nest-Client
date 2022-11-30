import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'


const HomeCategoryItems = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    //categories
    useEffect(() => {
        fetch('https://ph-assignment-12-used-products-resale-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className=''>
            <h2 className='text-center font-semibold text-4xl'>Categories</h2>
            <p className='text-center mt-3'>Browse items by category</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-10'>
                {
                    categories.map(category => <button
                        key={category._id}
                        onClick={() => navigate(`/category/${category._id}`)}
                    >
                        <div className='flex justify-center items-center gap-3 border-2 px-5 py-3 rounded-xl border-primary cursor-pointer hover:border-secondary hover:text-secondary'>
                            <img className='w-14' src={category.img} alt="" />
                            <h3 className='text-2xl font-semibold'>{category.name}</h3>
                        </div>
                    </button>)
                }
            </div>
        </div>
    );
};

export default HomeCategoryItems;
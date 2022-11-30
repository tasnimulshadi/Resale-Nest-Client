import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookNowModal from '../../Components/Modals/BookNowModal/BookNowModal';
import ProductCard from './ProductCard';





const Category = () => {
    const [categoryName, setCategoryName] = useState('All'); // for category name
    const [categories, setCategories] = useState([]); //for category side menu
    const products = useLoaderData(); // from route for products


    //categories
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            {/* category page side menu and content */}
            <div className="drawer drawer-mobile ">
                <input id="category-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content pb-10">
                    {/* <!-- Page content here --> */}
                    <h2 className='text-center font-semibold text-2xl mt-10 text-primary'>Category: <span className='text-secondary capitalize'>{categoryName}</span></h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5'>
                        {
                            products.map(product => <ProductCard
                                key={product._id}
                                product={product}
                            ></ProductCard>)
                        }
                    </div>


                </div>
                <div className="drawer-side mb-5">
                    <label htmlFor="category-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-slate-100 lg:rounded-xl text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <h3 className='text-xl mb-3 px-5'>Categories</h3>
                        <hr />

                        {
                            categories.map(category => <button
                                key={category._id}
                            >
                                <li onClick={() => setCategoryName(category.name)}>
                                    <Link to={`/category/${category._id}`}>
                                        <div className='flex justify-center items-center gap-3'>
                                            <img className='w-8' src={category.img} alt="" />
                                            <h3 className=' font-semibold'>{category.name}</h3>
                                        </div>
                                    </Link>
                                </li>
                            </button>)
                        }
                    </ul>

                </div>
            </div>


        </div>
    );
};

export default Category;
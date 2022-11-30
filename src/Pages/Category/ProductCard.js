import React, { useState, useEffect, useContext } from 'react';
import { FaCheck } from "react-icons/fa";
import { authContext } from '../../Context/AuthProvider';
import useRole from '../../Hooks/useRole';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, setSelectedProduct }) => {
    const { user } = useContext(authContext)
    const [role] = useRole(user?.email);
    const navigate = useNavigate();

    const { condition, email, imgurl, location, originalprice, postdate, productname, sellingprice, usedyears, _id, } = product;
    const [seller, setSeller] = useState({});

    //get seller info with seller email from product
    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setSeller(data);
            })
    }, [email])

    return (
        <div className="card shadow-xl pt-5">

            <div className='flex items-center gap-2 mx-5'>
                <div className='relative'>
                    <img className='w-12 border-2 rounded-full border-secondary' src={seller.photoURL} alt="" />
                    {
                        seller.verified &&
                        <FaCheck className='text-white bg-primary-focus rounded-full text-xl p-1 absolute right-0 bottom-0'></FaCheck>
                    }
                </div>
                <div>
                    <h4 className='font-semibold capitalize'>{seller.name}</h4>
                    <p className='text-gray-500'><small>{postdate}</small></p>
                </div>
            </div>
            <figure className="p-5">
                <img className="h-60 md:h-60 lg:h-40 w-full rounded-xl" src={imgurl} alt="car" />
            </figure>
            <div className="card-body p-5 pt-0">
                <h2 className="card-title text-secondary-focus capitalize">{productname}</h2>
                <p className='text-primary-focus'><span className='text-black'>Condition:</span> {condition}</p>
                <p className='text-primary-focus'><span className='text-black'>Used:</span> {usedyears} Years</p>
                <p className='text-primary-focus'><span className='text-black'>Location:</span> {location}</p>
                <div className='flex justify-between items-top'>
                    <div>
                        <p>Original Price:</p>
                        <p className='text-secondary-focus'><span className='font-extrabold'>৳</span> {originalprice}</p>
                    </div>
                    <div>
                        <p>Selling Price:</p>
                        <p className='text-xl text-right  text-primary-focus'><span className='font-extrabold'>৳</span> {sellingprice}</p>
                    </div>
                </div>
                <div className="card-actions justify-between items-center mt-3">
                    <button onClick={() => navigate(`/product/${_id}`)} className="btn btn-primary text-white">Check now</button>
                    {
                        role === 'buyer' &&
                        <label
                            onClick={() => setSelectedProduct(product)}
                            htmlFor="BookNowModal"
                            className="btn btn-secondary text-white"
                        >Book Now</label>
                    }
                </div>

            </div>
        </div>
    );
};

export default ProductCard;



import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const AdvertiseCard = ({ product }) => {
    const navigate = useNavigate();

    const { categoryId, email, imgurl, originalprice, postdate, productname, sellingprice, _id, } = product;
    const [seller, setSeller] = useState({});

    //get seller info with seller email from product
    useEffect(() => {
        fetch(`https://ph-assignment-12-used-products-resale-server.vercel.app/user?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setSeller(data);
            })
    }, [email])

    return (
        <div className="card shadow-xl pt-5 bg-orange-100">
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
                <div className="card-actions items-center mt-3">
                    <button onClick={() => navigate(`/product/${_id}`)} className="btn btn-primary w-full text-white">Check now</button>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;
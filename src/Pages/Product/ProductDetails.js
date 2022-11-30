import React, { useContext, useEffect, useState } from 'react';
import useRole from '../../Hooks/useRole';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';
import { FaCheck } from "react-icons/fa";
import BookNowModal from '../../Components/Modals/BookNowModal/BookNowModal';

const ProductDetails = () => {
    const product = useLoaderData();
    const { user } = useContext(authContext)
    const [role] = useRole(user?.email);
    const [seller, setSeller] = useState({});

    const { productname, originalprice, email, sellingprice, imgurl, condition, usedyears, phone, location, postdate, description, sold } = product;


    //get seller info with seller email from product
    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setSeller(data);
            })
    }, [email])

    return (
        <div className=' m-10 lg:mb-20'>
            <div className='flex items-center gap-2 mb-3 bg-secondary rounded-xl p-2'>
                <div className='relative '>
                    <img className='w-12 border-2 rounded-full border-secondary ' src={seller.photoURL} alt="" />
                    {
                        seller.verified &&
                        <FaCheck className='text-white bg-primary-focus rounded-full text-xl p-1 absolute right-0 bottom-0'></FaCheck>
                    }
                </div>
                <div>
                    <h4 className='font-semibold capitalize text-white'>{seller.name}</h4>
                    <p className=' text-white'><small>{postdate}</small></p>
                </div>
            </div>
            <div className="flex flex-wrap gap-10">
                <img className='w-full md:w-1/2 rounded-xl border-8 border-primary' src={imgurl} alt="Album" />
                <div className="flex flex-col gap-2">
                    <h2 className='text-3xl font-semibold text-primary-focus'>{productname}</h2>
                    <p className='text-primary-focus'><span className='text-black'>Post Date:</span> {postdate}</p>
                    <p className='text-primary-focus'><span className='text-black'>Condition:</span> {condition}</p>
                    <p className='text-primary-focus'><span className='text-black'>Used:</span> {usedyears} Years</p>
                    <p className='text-primary-focus'><span className='text-black'>Location:</span> {location}</p>
                    <p className='text-primary-focus'><span className='text-black'>Seller Phone:</span> {phone}</p>
                    <p className=' text-black'>Description:</p>
                    <textarea name='description' className="textarea textarea-bordered border-primary-focus" defaultValue={description} readOnly></textarea>
                    <p>Original Price: <span className='text-secondary-focus text-2xl'><span className='font-extrabold'>৳</span> {originalprice}</span></p>
                    <p>Selling Price: <span className='text-primary-focus text-2xl'><span className='font-extrabold'>৳</span> {sellingprice}</span></p>
                    <div className="card-actions justify-between items-center mt-3">

                        {
                            (role === 'buyer' && !sold) &&
                            <label
                                htmlFor="BookNowModal"
                                className="btn btn-primary text-white"
                            >Book Now</label>
                        }
                        <BookNowModal
                            product={product}
                        ></BookNowModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
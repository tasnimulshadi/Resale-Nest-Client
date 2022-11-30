import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaCheck } from "react-icons/fa";


const MyOrdersCard = ({ booking, refetch }) => {
    const [product, setProduct] = useState({});
    const [seller, setSeller] = useState({});
    const navigate = useNavigate();

    const { bookingdate, buyeremail, buyerphone, meetinglocation, productid, selleremail, _id } = booking;

    const { imgurl, originalprice, postdate, productname, sellingprice, _id: product_id } = product;


    //get seller info with seller email from booking
    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${selleremail}`)
            .then(res => res.json())
            .then(data => {
                setSeller(data);
            })
    }, [selleremail])

    //get product by product id
    useEffect(() => {
        fetch(`http://localhost:5000/product/${productid}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productid])


    const handlebookingDelete = id => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged && data.deletedCount > 0) {
                    toast.success('Product Deleted');
                    refetch();
                }
            })
    }


    return (
        <div className={"card shadow-xl pt-5 "}>
            <div className='flex items-center gap-2 mx-5 mb-2'>
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
            <figure className="p-5 pt-1">
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
                    {/* details */}
                    <button onClick={() => navigate(`/product/${product_id}`)} className="btn btn-xs btn-primary text-white">Details</button>

                    {/* delete */}
                    <button onClick={() => handlebookingDelete(_id)} className="btn btn-xs btn-secondary text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyOrdersCard;
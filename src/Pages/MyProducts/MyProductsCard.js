import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const MyProductsCard = ({ product, refetch }) => {
    const { imgurl, originalprice, productname, sellingprice, _id, advertise, sold } = product;
    const navigate = useNavigate();

    let bgcolor = '';
    if (advertise) {
        bgcolor = 'bg-orange-100';
    }
    if (sold) {
        bgcolor = 'bg-green-100 border-2 border-dashed border-secondary-focus';
    }

    // DELETE
    const handleProductDelete = (id) => {
        fetch(`https://ph-assignment-12-used-products-resale-server.vercel.app/product/${id}`, {
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

    // SOLD
    const handleProductSold = (id) => {
        fetch(`https://ph-assignment-12-used-products-resale-server.vercel.app/product/sold/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ sold: true, advertise: false })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged && data.modifiedCount > 0) {
                    toast.success('Product updated as SOLD');
                    refetch();
                }
            })

    }

    // ADVERTISE
    const handleProductAdvertise = (id) => {
        fetch(`https://ph-assignment-12-used-products-resale-server.vercel.app/product/advertise/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ advertise: true })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged && data.modifiedCount > 0) {
                    toast.success('Product updated as Advertised');
                    refetch();
                }
                if (!data.acknowledged && data?.adlimit) {
                    toast.error('Can not Advertise now. Max(4) Advertise Limit Reached');
                }
            })

    }


    return (
        <div className={"card shadow-xl pt-5 " + bgcolor}>
            {
                sold &&
                <p className='absolute p-1 text-center uppercase font-semibold text-7xl text-secondary-focus top-1/4 w-full'>Sold</p>
            }
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
                    <button onClick={() => navigate(`/product/${_id}`)} className="btn btn-xs btn-primary text-white">Details</button>

                    {/* delete */}
                    <button onClick={() => handleProductDelete(_id)} className="btn btn-xs btn-secondary text-white">Delete</button>

                    {/* sold */}
                    {
                        !sold &&
                        <button onClick={() => handleProductSold(_id)} className="btn btn-xs btn-warning text-white">Sold</button>
                    }

                    {/* advertise */}
                    {
                        (!sold && !advertise) &&
                        <button onClick={() => handleProductAdvertise(_id)} className="btn btn-xs btn-primary text-white">Advertise</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProductsCard;
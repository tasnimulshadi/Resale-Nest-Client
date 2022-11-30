import React, { useState, useEffect } from 'react';
import AdvertiseCard from './AdvertiseCard';
import { FaTimes } from "react-icons/fa";


const HomeAdvertiseSection = () => {
    const [isClosed, setIsClosed] = useState(false);
    const [advertisedProducts, setAdvertisedProducts] = useState([]);

    useEffect(() => {
        fetch(`https://ph-assignment-12-used-products-resale-server.vercel.app/products/all?filter=advertise`)
            .then(res => res.json())
            .then(data => setAdvertisedProducts(data));
    }, [])

    if (advertisedProducts.length < 1) {
        return <div></div>
    }

    return (
        <div className={isClosed ? 'hidden' : 'border-dashed border-2 border-secondary rounded-xl mx-5 mb-24'}>
            <div className='flex justify-between pt-3 px-5'>
                <h2>Advertise</h2>
                <button onClick={() => setIsClosed(true)} className='text-secondary'><FaTimes></FaTimes> </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5'>
                {
                    advertisedProducts.map(product => <AdvertiseCard
                        key={product._id}
                        product={product}
                    ></AdvertiseCard>)
                }
            </div>
        </div>
    );
};

export default HomeAdvertiseSection;
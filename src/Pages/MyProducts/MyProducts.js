import React, { useContext } from 'react';
import { authContext } from '../../Context/AuthProvider';
import MyProductsCard from './MyProductsCard';
import { useQuery } from '@tanstack/react-query';

const MyProducts = () => {
    const { user } = useContext(authContext);

    //react query
    const { data: products = [], refetch } = useQuery({
        queryKey: ['productsbyseller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/productsbyseller/${user.email}`);
            return await res.json();
        }
    });


    return (
        <div>
            <h2 className='text-center font-semibold text-2xl my-5 text-primary'>My <span className='text-secondary capitalize'>Products</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5'>
                {
                    products.map(product => <MyProductsCard
                        key={product._id}
                        product={product}
                        refetch={refetch}
                    ></MyProductsCard>)
                }
            </div>
        </div>
    );
};

export default MyProducts;
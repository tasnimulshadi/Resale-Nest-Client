import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { authContext } from '../../Context/AuthProvider';
import MyOrdersCard from './MyOrdersCard';

const MyOrders = () => {
    const { user } = useContext(authContext);

    //react query
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`https://ph-assignment-12-used-products-resale-server.vercel.app/bookings?email=${user.email}`);
            return await res.json();
        }
    });


    return (
        <div>
            <h2 className='text-center font-semibold text-2xl my-5 text-primary'>My <span className='text-secondary capitalize'>Orders</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5'>
                {
                    bookings.map(booking => <MyOrdersCard
                        key={booking._id}
                        booking={booking}
                        refetch={refetch}
                    ></MyOrdersCard>)
                }
            </div>
        </div>
    );
};

export default MyOrders;
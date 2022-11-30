import React from 'react';

const DashBoard = () => {
    return (
        <div >
            <h2 className='text-center font-semibold text-2xl mt-10 text-primary uppercase'>dash<span className='text-secondary '>board</span></h2>
            <p className='text-center capitalize text-gray-400'>Access Resale Nest users dashboard pages from dashboard menu on your left</p>
            <div className='flex justify-center items-center'>
                <img className='w-3/4 block' src="https://openweathermap.org/themes/openweathermap/assets/img/weather_db.jpg" alt="" />
            </div>
        </div>
    );
};

export default DashBoard;
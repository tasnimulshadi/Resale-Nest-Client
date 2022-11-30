import React from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from "react-icons/fa";

const UsersTableBody = ({ user, index, refetch }) => {
    const { _id, name, email, verified, photoURL, role } = user;


    const handleSellerVarification = (email) => {
        fetch(`http://localhost:5000/user?email=${email}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ varification: !verified })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged && data.modifiedCount > 0) {
                    refetch();
                }
            })
    }


    return (
        <tr key={_id}>
            <th>{index + 1}</th>
            <td className='w-10 '>
                <div className='relative'>
                    <img className='w-12 border-2 rounded-full border-secondary' src={photoURL} alt="" />
                    {
                        verified &&
                        <FaCheck className='text-white bg-primary-focus rounded-full text-xl p-1 absolute right-0 bottom-0'></FaCheck>
                    }
                </div>
            </td>
            <td className='capitalize'>{name}</td>
            <td>{email}</td>
            <td className='capitalize'>{role}</td>
            <td className='text-right'>
                {
                    role === "seller" &&
                    <button onClick={() => handleSellerVarification(email)} className="btn btn-sm btn-info capitalize text-white mr-2">
                        {verified ? 'Unverify' : 'Verify'}
                    </button>
                }
                {
                    role !== "admin" &&
                    <button onClick={() => toast('Delete Feature Is Comming Soon', { icon: '🚗', })} className="btn btn-sm btn-error capitalize text-white">Delete</button>
                }
            </td>
        </tr >
    );
};

export default UsersTableBody;
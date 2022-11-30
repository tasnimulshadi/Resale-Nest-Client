import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UsersTableBody from './UsersTableBody';

const Users = ({ userRole }) => {
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch(`https://ph-assignment-12-used-products-resale-server.vercel.app/users?role=${userRole}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setUsers(data);
    //         })
    // }, [userRole])

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', userRole],
        queryFn: () => fetch(`https://ph-assignment-12-used-products-resale-server.vercel.app/users?role=${userRole}`)
            .then(res => res.json())
    })


    return (
        <div>
            <h2 className='my-5 text-2xl font-semibold text-primary text-center'>All <span className='text-secondary capitalize'>{userRole ? (userRole + 's') : "Users"}</span>
            </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className='text-right'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <UsersTableBody
                                    key={user._id}
                                    index={index}
                                    user={user}
                                    refetch={refetch}
                                ></UsersTableBody>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
import React, { useContext } from 'react';
import { authContext } from '../../Context/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { createUser, signInGoogle, updateUser } = useContext(authContext);
    const [isSellerAccount, setIsSellerAccount] = useState(false);

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;

        createUser(email, password)
            .then((result) => {
                // update user with name & default profile img
                updateUser(name, "https://amedical.az/uploads/posts/2022-09/1664019855_no-profile-picture-icon-15.jpeg")
                    .then(() => {

                    })
                    .catch((error) => {
                        // console.error(error);
                        toast.error(error.message.slice(10));
                    });

            }).catch((error) => {
                // console.error(error);
                toast.error(error.message.slice(10));
            });
    }

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then((result) => {
                // console.log(result.user);
                const user = result.user;
                navigate('/');
            })
            .catch((error) => {
                // console.error(error);
                toast.error(error.message.slice(10));
            });
    }

    return (
        <div className="hero my-12">
            <div className="hero-content flex-col ">
                <div className="text-center mb-5">
                    <h1 className="text-5xl font-bold text-secondary"><span className='text-primary'>Register</span> Now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <button className="label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control">
                            <div className={isSellerAccount ? 'text-primary-focus' : 'text-secondary-focus'}>
                                <input type="checkbox" onChange={() => setIsSellerAccount(!isSellerAccount)} value="seller" /> Seller Account
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Register</button>
                        </div>
                    </form>
                    <button onClick={handleGoogleSignIn} className='mb-7 flex justify-center items-center gap-2 hover:text-secondary'>Sign in with <span className='text-xl flex justify-center items-center font-bold text-primary-focus'><FcGoogle></FcGoogle>oogle</span></button>
                </div>
            </div>
        </div>
    );
};

export default Register;
import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';

const Login = () => {
    const { loginUser, signInGoogle } = useContext(authContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;

        loginUser(email, password)
            .then((result) => {
                // console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                // console.error(error);
                toast.error(error.message.slice(10));
            });
    }

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then((result) => {
                const user = result.user;
                createUserInDB(user.email, user.displayName, user.photoURL, "buyer", false);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                // console.error(error);
                toast.error(error.message.slice(10));
            });
    }

    const createUserInDB = (email, name, photoURL, role, verified) => {
        fetch('https://ph-assignment-12-used-products-resale-server.vercel.app/user', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, name, photoURL, role, verified })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('New User Created');
                }
            })

    }

    return (
        <div className="hero my-12">
            <div className="hero-content flex-col ">
                <div className="text-center mb-5">
                    <h1 className="text-5xl font-bold text-secondary"><span className='text-primary'>Login</span> Now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Login</button>
                        </div>
                    </form>
                    <button onClick={handleGoogleSignIn} className='mb-7 flex justify-center items-center gap-2 hover:text-secondary'>Sign in with <span className='text-xl flex justify-center items-center font-bold text-primary-focus'><FcGoogle></FcGoogle>oogle</span></button>
                </div>
            </div>
        </div>
    );
};

export default Login;
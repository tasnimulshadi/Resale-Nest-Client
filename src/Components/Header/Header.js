import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import { authContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import useRole from '../../Hooks/useRole';

const Header = () => {
    const { user, logoutUser } = useContext(authContext);
    const [role] = useRole(user?.email);

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast.success('User Logged Out')
            }).catch((error) => {
                console.error(error);
            });
    }

    const menuItems = <>
        <li className='text-red-400'><Link >{role}</Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/category/all'>Categoty</Link></li>
        {
            user
                ?
                <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li onClick={handleLogout}><button>Logout</button></li>
                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </>
        }

    </>


    return (
        <nav className="navbar bg-base-100">
            <div className="navbar-start">
                {/* category dropdown */}
                {/* dashboard-drawer */}
                <label htmlFor="dashboard-drawer" className="drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-focus" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                {/* category-drawer */}
                <label htmlFor="category-drawer" className="drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-focus" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                {/* logo */}
                <Link className="btn border-0 hover:bg-white normal-case text-3xl font-bold">
                    <img src={logo} alt="logo" className='h-full' />
                    <span className='text-primary'>ReSale</span> <span className='text-secondary'>Nest</span>
                </Link>
            </div>
            <div className="navbar-end">
                {/* large device menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-primary-focus font-semibold">
                        {menuItems}
                    </ul>
                </div>
                {/* dropdown menu */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-focus" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0 text-primary-focus">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
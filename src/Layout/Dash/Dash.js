import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { authContext } from '../../Context/AuthProvider';
import useRole from '../../Hooks/useRole';

const Dash = () => {
    const { user } = useContext(authContext);
    const [role] = useRole(user?.email);

    return (
        <div>

            <div className='max-w-7xl mx-auto'>
                <Header></Header>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content p-4">
                        {/* <!-- Page content here --> */}
                        <Outlet></Outlet>

                    </div>
                    <div className="drawer-side mb-5">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 text-base-content bg-slate-100 lg:rounded-xl">
                            {/* <!-- Sidebar content here --> */}
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            {// buyer
                                role === 'buyer' &&
                                <li><Link to='/dashboard/myorders'>My orders</Link></li>
                            }
                            {// seller
                                role === 'seller' &&
                                <>
                                    <li><Link to='/dashboard/addproduct'>Add A product</Link></li>
                                    <li><Link to='/dashboard/myproduct'>My Products</Link></li>
                                    <li><Link to='/dashboard/mubuyers'>My buyers</Link></li>
                                </>
                            }
                            {// admin
                                role === 'admin' &&
                                <>
                                    <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                    <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                    <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                    <li><Link to=''>Reported Items</Link></li>
                                </>
                            }
                        </ul>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dash;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { MainContext } from '../contex/AuthContex';
const Header = () => {
    const { user, logOut } = useContext(MainContext)
    const handaleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch(error => {
                console.error(error.message)
            })
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to='/'>Home</Link> </li>

                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img className='h-10	w-56	' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='text-xl'><Link to='/'>Home </Link></li>
                        <li className='text-xl'><Link to='/myreview'>My Review </Link></li>

                        <li className='text-xl'><Link to='/blog'>Blogs </Link></li>
                        {
                            user?.email ?
                                <>

                                    <li className='font-semibold	'> <Link to='/addproduct'>Add Product</Link></li>
                                    <li className='font-semibold	'> <Link to='/'> My Review</Link></li>
                                </>
                                :
                                <></>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <>
                                <span className='text-white'>{user?.displayName}</span>
                                <button onClick={handaleLogOut} className="btn bg-blue">LogOut</button>
                            </> :
                            <>

                                <Link
                                    to='/login'
                                    className="btn bg-blue"
                                >
                                    Get Started
                                </Link>

                            </>
                    }
                    {/* <Link className="btn bg-blue" to='/'>Start Now </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Header;
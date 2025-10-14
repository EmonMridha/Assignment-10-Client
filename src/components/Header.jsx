import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut().then(() => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Logged Out successfully!",
                showConfirmButton: false,
                timer: 1500
            });
        }).catch((error) => {
            Swal.fire({
                title: "Sweet!",
                text: "An error occured while logging out",
                imageUrl: "https://unsplash.it/400/200",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
            });
        });
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                {/* Mobile dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        {/* Hamburger icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <Link to='/'>Home</Link>
                        <Link to='/allPlants'>All Plants</Link>
                        <Link to='/addPlants'>Add Plant</Link>
                        <Link to='/myPlants'>My Plants</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </ul>
                </div>

                {/* Brand name */}
                <a href="/" className="btn btn-ghost text-2xl font-bold text-green-600">Plantify</a>
            </div>

            {/* Desktop menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-base font-medium">
                    <Link to='/'>Home</Link>
                    <Link to='/allPlants'>All Plants</Link>
                    <Link to='/addPlants'>Add Plant</Link>
                    <Link to='/myPlants'>My Plants</Link>
                </ul>
            </div>

            <div className="navbar-end gap-5">
                {user ?
                    <div className='flex justify-center items-center flex-col'>
                        <img className='w-10 cursor-pointer rounded-b-full' title={user?.displayName || 'User'} src={user.photoURL} alt="" />
                        <button onClick={handleLogOut} className='btn'>Logout</button>
                    </div> : (
                        <div>
                            <Link className='btn' to='/login'>Login</Link>
                            <Link className='btn' to='/register'>Register</Link>
                        </div>
                    )}

            </div>
        </div>

    );
};

export default Header;
import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthContext } from '../Context/AuthContext';
import Spinner from '../components/Spinner';

const MainLayout = () => {
    const { loading } = useContext(AuthContext)
    return (
        <div className='relative'>

            {
                loading && (
                    <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50">
                        <Spinner size="w-16 h-16" color="border-green-500" />
                    </div>
                )
            }
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
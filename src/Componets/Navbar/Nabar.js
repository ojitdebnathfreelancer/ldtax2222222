import React from 'react';
import { Link } from 'react-router-dom';
import nav1 from '../../Assets/nav-left-logo.png';
import { GoThreeBars } from 'react-icons/go'

const Nabar = () => {
    return (
        <div className='bg-purple h-[82px] lg:flex md:hidden flex items-center justify-between pb-4 px-5 fixed top-0 left-0 w-[100%]'>
            <div className='flex items-center'>
                <Link to="/" className='mt-5'>
                    <img src={nav1} alt="logo" />
                </Link>
            </div>
            <GoThreeBars className='lg:hidden md:hidden block' size={30} />
            <img className='lg:block md:block hidden' src="https://ldtax.gov.bd/assets/admin/layout4/img/nagorik.png" alt='logo'></img>
        </div>
    );
};

export default Nabar;
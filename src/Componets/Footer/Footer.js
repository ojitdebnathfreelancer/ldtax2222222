import React from 'react';
import { Link } from 'react-router-dom';
import map from '../../Assets/bd-map.png';
import footerLogo from '../../Assets/footer-right-logo.png';

const Footer = () => {
    return (
        <div className='bg-green px-5 lg:flex hidden items-center justify-between py-2 fixed w-[100%] bottom-0 left-0'>
            <div className='flex items-center'>
                <Link>
                    <img src={map} alt="map" />
                </Link>
                <p className='text-[#592e80] text-[14px] ml-2 font-semibold'>ভূমি সংস্কার বোর্ড, ভূমি  মন্ত্রণালয়, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>
            </div>
            <div className='flex'>
                <span className='text-[#592e80] text-[14px] mr-1 font-semibold'>
                    কারিগরি সহায়তায়
                </span>
                <img className='h-[35px]' src={footerLogo} alt="footer-logo"></img>
            </div>
        </div>
    );
};

export default Footer;
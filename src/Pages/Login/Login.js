import React from 'react';
import bg from '../../Assets/login-bg.jpg';
import logo from '../../Assets/logo-big.png';
import { FaUser } from 'react-icons/fa';
import { GrSecure } from 'react-icons/gr';
import { BiLogInCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Login = () => {
    document.title = "জাতীয় ভূমি তথ্য ও সেবা কাঠামো";
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} className="w-full min-h-screen main-login">
            <div className='lg:w-[400px] md:w-[350px] w-[100%] mx-auto pt-20 lg:px-0 md:px-0 px-6'>
                <div className='flex justify-center'>
                    <Link>
                        <img src={logo} alt="logo"></img>
                    </Link>
                </div>
                <div className='login-bg p-10 rounded-lg mt-10 mb-3 px-6 input-container'>
                    <label>
                        <FaUser />
                        <input placeholder='ব্যবহারকারী' type='text'></input>
                    </label>
                    <label>
                        <GrSecure />
                        <input placeholder='পাসওয়ার্ড' type='password'></input>
                    </label>
                    <div className='mt-5 flex justify-end'>
                        <button className='bg-[#8dc542] hover:bg-[#682F91] hover:text-white flex items-center px-4 py-2 rounded-md'>
                            <BiLogInCircle size={20} />
                            <span className='text-[13px] ml-1'>প্রবেশ</span>
                        </button>
                    </div>
                    <div>
                        <Link className='text-[#5b9bd1] text-[14px] hover:underline hover:text-[#3175af] font-medium' >পাসওয়ার্ড পুনরুদ্ধার?</Link>
                    </div>
                </div>
                <div className='flex items-center justify-between login-bg p-5 rounded-lg'>
                    <span className='text-[14px]'>ভূমি সেবা ড্যাসবোর্ড</span>
                    <button className='bg-[#8dc542] hover:bg-[#682F91] hover:text-white flex items-center px-4 py-2 rounded-md'>
                        <BiLogInCircle size={20} />
                        <span className='text-[13px] ml-1'>প্রবেশ</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
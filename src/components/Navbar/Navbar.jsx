import React from 'react';
import logo from '../../assets/logo.png';
import Containar from '../../Helper/Containar';
import { BsGear } from "react-icons/bs";
import { PiBookmarkBold } from "react-icons/pi";
// import { FiSearch } from "react-icons/fi";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import axios from 'axios';
import useAuthContext from '../../Hooks/useAuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../../Firebase/firebase.config';
import { toast } from 'sonner';


const Navbar = () => {
    // bg-[#0280945d] [#028094]

    const { open, setOpen, user } = useAuthContext();

    const handlePreference = (e) => {
        const inputValue = e.target.value;
        // console.log(inputValue);
        if (inputValue.trim() !== '') {
            axios.post('http://localhost:5000/api/preferences', { preference: inputValue })
        }
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{
            toast.success('Sign out successful');
        })
        .catch((error)=>{
            console.log(error.message);
            toast.error(error.message);
        })
    }


    return (
        <div className=' py-2  text-white border-b shadow-lg shadow-[#028094]/30 border-gray-700'>
            <Containar>
                <div className='flex justify-between items-center'>

                    <img className='w-[15%]' src={logo} alt="" />

                    {/* input field with search icon */}
                    <div className='relative'>
                        <input
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handlePreference(e);
                                    e.target.value = '';
                                }
                            }}
                            className='bg-[#0280945d] placeholder:text-[#989797] placeholder:font-medium text-white px-4 py-2 rounded-full outline-none w-[300px] focus:w-[400px] duration-300 ease-in-out pr-10'
                            type="text"
                            placeholder='Add your Preference'
                        />
                        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            {/* <FiSearch  /> */}
                            <MdOutlineAddCircleOutline className="text-xl" />
                        </span>
                    </div>

                    <div className='flex gap-6 items-center'>
                        <PiBookmarkBold className='text-2xl text-gray-300 cursor-pointer hover:text-[#028094] duration-300 ease-in-out' />
                        <BsGear className='text-2xl text-gray-300 cursor-pointer hover:text-[#028094] duration-300 ease-in-out' />

                        {user?.email ?
                            <button onClick={handleSignOut} className='py-1 px-3.5 rounded bg-gray-300 text-black hover:bg-[#0ff] boxShadow'>Sign out</button>
                            : <button onClick={() => setOpen(true)} className='py-1 px-3.5 rounded bg-gray-300 text-black hover:bg-[#0ff] boxShadow'>Login</button>}
                    </div>
                </div>
            </Containar>
        </div>
    );
};

export default Navbar;
import { Link, NavLink } from 'react-router-dom';
import { GoSearch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { useContext, useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { ShopContext } from '../../context/ShopContext';







const Navbar = () => {

    const [visible, setVisible] = useState(false)

    const {setSlowSearch} = useContext(ShopContext)



    return (
        <div className=" flex items-center justify-between py-5 font-medium">
            <Link to={'/'} className='text-3xl  font-bold text-orange-400'>FreshThreads.</Link>
            <ul className='hidden sm:flex gap-5 text-sm text-black'>
                <NavLink to={'/'} className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className='w-3/4 h-[1.5px] border-none  bg-orange-400 hidden' />
                </NavLink>
                <NavLink to={'/collection'} className="flex flex-col items-center gap-1 ">
                    <p>COLLECTION</p>
                    <hr className='w-3/4 h-[1.5px] border-none bg-orange-400 hidden' />
                </NavLink>
                <NavLink to={'/about'} className="flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    <hr className='w-3/4 h-[1.5px] border-none  bg-orange-400 hidden' />
                </NavLink>
                <NavLink to={'/contact'} className="flex flex-col items-center gap-1">
                    <p>CONTACT</p>
                    <hr className='w-3/4 h-[1.5px] border-none  bg-orange-400 hidden' />
                </NavLink>

            </ul>
            <div className='flex items-center gap-8 '>
                <GoSearch onClick={()=>setSlowSearch(true)} className='w-5 min-w-5 h-6 cursor-pointer' />
                <div className='group relative'>
                    <FaRegUser className='cursor-pointer  h-6 ' />
                    <div className='group-hover:block hidden absolute dropdown-menu  right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 px-5 py-3 bg-slate-100 text-gray-500 rounded-lg'>
                            <p className='cursor-pointer  hover:text-black'>Profile</p>
                            <p className='cursor-pointer  hover:text-black'>Order</p>
                            <p className='cursor-pointer  hover:text-black'>Logout</p>
                        </div>
                    </div>

                </div>
                <Link to={'/card'} className='relative'>
                    <IoBagHandleOutline className='w-5 min-w-5 h-6' />
                    <p className=' absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>10</p>

                </Link>
                <BiMenuAltRight onClick={() => setVisible(true)} className='w-6 h-6 cursor-pointer sm:hidden' />

                {
                    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>

                        <div className='flex flex-col text-gray-600'>
                            <div onClick={() => setVisible(false)} className='flex items-center p-3 gap-4 '>
                                <IoIosArrowBack className='h-4 totate-180 ' />
                                <p>Back</p>

                            </div>
                            <NavLink onClick={() => setVisible(false)} className='py-2  pl-4' to={'/'}>HOME</NavLink>
                            <NavLink onClick={() => setVisible(false)} className='py-2  pl-4' to={'/collection'}>COLLECTION</NavLink>
                            <NavLink onClick={() => setVisible(false)} className='py-2  pl-4' to={'/about'}>ABOUT</NavLink>
                            <NavLink onClick={() => setVisible(false)} className='py-2  pl-4' to={'/contact'}>CONTACT</NavLink>

                        </div>

                    </div>
                }

            </div>
        </div>
    );
};

export default Navbar;
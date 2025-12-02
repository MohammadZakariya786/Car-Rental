import React, { use } from 'react'
import { assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const NavbarOwner = () => {

    const {user}=useAppContext()

  return (
    <div className='flex items-center justify-between px-6  md:px-10 py-4 text-gray-500 border-b border-borderColor relative  transition-all'>
        <Link to="/" className='flex gap-3'>
            <img src={assets.logo} alt='logo' className='h-7'/>
            <h1 className='text-2xl font-bold text-primary'>Car Rental</h1>
        </Link>
        <p>Welcome, {user?.name || "Owner"}</p>
    </div>
  )
}

export default NavbarOwner
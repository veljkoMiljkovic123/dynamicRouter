import React from 'react'
import { NavLink } from 'react-router-dom'
function NavbarComponent() {
  return (
    <div className='flex justify-between items-center container mx-auto h-[100px]'>
        <h2>Logo</h2>
        <ul className='flex gap-5 '>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/products'}>Products</NavLink>
        </ul>

    </div>
  )
}

export default NavbarComponent
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='list'>
            <Link to='/' className='navlink'>home</Link>
            <Link to='/events' className='navlink'>events</Link>
            <Link to='/contact' className='navlink'>contact</Link>

        </ul>
    </div>
  )
}

export default Navbar
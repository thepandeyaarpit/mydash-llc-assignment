import React from 'react'

const Nav = () => {
  return (
    <>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li className='logout'><a className="active" href="#about">Logout</a></li>
        </ul>
    </>
  )
}

export default Nav
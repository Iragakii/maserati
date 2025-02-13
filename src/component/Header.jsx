import React from 'react'
import logo from '../assets/maserati-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcJcb } from '@fortawesome/free-brands-svg-icons' 
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className='up'>
        <div className="header">
             <img src={logo}  className="logo-ma"></img>
             <div className="up-left">
                <a className='up-home' href=''><span >Home</span></a>
                <a className='up-home' href=''><span >Platform</span></a>
                <a className='up-home' href=''><span >News</span></a>
                <a className='up-home' href=''><span >Shop</span></a>
                <a className='up-home' href=''><span >Pages</span></a>
                <a className='up-home' href=''><span >Get in Touch</span></a>
             </div>
             <div className="up-right">
                <Link ><FontAwesomeIcon className='cart' icon={faCcJcb} /></Link>
                <button className='btn-sell'>Sell Now</button>
             </div>
        </div>
       


    </div>
    </>
  )
}

export default Header
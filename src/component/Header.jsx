import React from 'react'
import logo from '../asset/maserati-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcJcb } from '@fortawesome/free-brands-svg-icons' 
import { Link, Route, Routes } from 'react-router-dom'




const Header = () => {
  return (
    <>
    <div className='up'>
        <div className="header">
             <img src={logo}  className="logo-ma"></img>
             <div className="up-left">
                <Link className='up-home' to='/best'><span >SuperCar</span></Link>
                <Link className='up-home' to=''><span >Sell a Car</span></Link>
                <Link className='up-home' to=''><span >News</span></Link>
                <Link className='up-home' to=''><span >Shop</span></Link>
                <Link className='up-home' to=''><span >Pages</span></Link>
                <Link className='up-home' to=''><span >Get in Touch</span></Link>
             </div>
             <div className="up-right">
                <Link><FontAwesomeIcon className='cart' icon={faCcJcb} /></Link>
                <button className='btn-sell'>Sign Up</button>
             </div>
        </div>
       
        

    </div>
  
    
    </>
  )
}

export default Header
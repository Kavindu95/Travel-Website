import React, {useState} from 'react'
import './navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'
import { Button } from 'react-bootstrap'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb' 



  
const Navbar = () => {
  const[active,setActive]= useState('navBar')
  
  //function to toggle navBar
  const showNav = ()=>{
    setActive('navBar activeNavbar')
    
  }
  
  //function to remove navBar
   const removeNavbar =  ()=>{
    setActive('navBar')
    
  }
  return (
    <section className='navBarSection'>
      <header className='header'>
   
        
      <div className='logoDiv'>

<a href='#' className='logo flex'>
<h1><SiYourtraveldottv className="icon"/>Booking.com</h1>
</a>
</div>


        <div className={active}>

          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem" >
              <a href="#" className="navLink">Packages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>
            <Button className='btn'>
              <a href="#" className="navLink">Book Now</a>
            </Button>
            
         
           </ul>
         
           

        </div>
        
        <div onClick = {showNav}
         className='toggleNavbar'>
            <TbGridDots className="icon"/>
            </div>

            <div onClick={removeNavbar}
             className='closeNavbar'>
           <AiFillCloseCircle className="icon"/>
           </div>


      </header>

    </section>
  )
}

export default Navbar
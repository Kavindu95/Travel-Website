import React, {useEffect } from 'react'
import './footer.css'
import video2 from '../../Assest/video2.mp4'
import { FiSend } from 'react-icons/fi'
import { AiFillFire } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';

import Aos from 'aos'
import 'aos/dist/aos.css'



const Footer = () => {
//react hooks
useEffect(()=>{
  Aos.init({duration:2000})
},[])





  return (
    <section className='footer'>
      <div className='videoDiv'>

        <video src={video2} loop autoPlay muted type="video/mp4">


        </video>
        <div className='secContent container'>
          <div className='contactDiv flex'>
            <div data-aos="fade-up" className='text' >
              <small>KEEP IN TOUCH</small>

              <h2>Travel with us</h2>

            </div>



          </div>
          <div>
            <div data-aos="fade-up" className='inputDiv flex'>
              <input type='text' placeholder='Enter Email Address' />
            </div>
            <div>
            <button data-aos="fade-up" className='btn' type='submit'>
                SEND <FiSend className='icon' />
              </button>

            </div>
          </div>

          <div className='footerCard flex'>
            <div className='footerIntro flex'>
              <div className='logoDive'>
                <a href='#' className='logo flex'>
                  <AiFillFire className='icon' /> Travel.
                </a>
              </div>
              <div>
              
              </div>
              

            </div>

          </div>
          <div className="footageParagraph">
              Are you traveling to Sri Lanka in 2023? Check out our Sri Lanka guide to find the best places to visit, 
              tourist attractions, popular destinations, the best places to eat and drink, and where to stay.
              </div>

        </div>
        <div className="footerLinks gride">
          <div className='linkGroup'>
            <span className='groupTitle'>
              OUR AGANCY

            </span>
            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Services
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Insurance
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Agency
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Tourism
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Payment
            </li>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Footer
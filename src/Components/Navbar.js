import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className='d-lg-flex justify-content-between align-items-center bg-dark text-white px-4 py-2'>
    <div className=''><i class="fa-solid fa-location-dot"></i>  PO Box 14872 Collins StreetWest, Australia</div>
    <div className=''><i class="fa-solid fa-phone"></i>  +61-75547-6534</div>

    </div>
    <nav className='p-4 nav-header'>
        
        <div className='d-lg-flex justify-content-between align-items-center'>
        {/* <div className='row'> */}
            <div className='w-100'>
            <ul className='nav-ul mb-0'>
            <Link to="/Home"><li>Home</li></Link>
            <Link to='#' title='Page Not Available'><li>Contact</li></Link>
            <Link to='Roomsingle'><li>Room</li></Link>
            <Link to='Cart'><li>Cart</li></Link>
            </ul>
            </div>
            <div className='w-100 text-center'>
              {/* <img src='https://www.tajhotels.com/content/dam/tajhotels/icons/style-icons/logo--Taj.png' width="100" height="50"/> */}
              <span className='fs-29 text-white'>Steller Haven</span><br/>
              <span className='text-uppercase text-white'>Luxury Hotel</span>
           </div>
            <div className='w-100 text-center'>
            <button className="button buttonLight">Book Your stay</button>
           </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
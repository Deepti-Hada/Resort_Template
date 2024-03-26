import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Home() {
  const[date,setDate] = useState('')
  const [room,setRoom] = useState(1);
  const [adult,setAdult] = useState(0);
  const [children,setChildren] = useState(0);
  const [showdate,setShowdate] = useState(false)
  const [showroom,setShowRoom] = useState(false)
  const [showguest,setShowguest] = useState(false)
 const showdatefunc = () =>{
  setShowdate(true)
  setShowRoom(false)
  setShowguest(false)
 }
 const showroomfunc = () =>{
  setShowdate(false)
  setShowRoom(true)
  setShowguest(false)
 }
 const showguestfunc = () =>{
  setShowdate(false)
  setShowRoom(false)
  setShowguest(true)
 }
const checkavailable = () =>{
  setShowdate(false)
  setShowRoom(false)
  setShowguest(false)
}
  return (
    <div className=''>
      <div className='home-bg-banner d-flex justify-content-center align-items-center' data-aos="fade-right" data-aos-duration="1000">
        <h1 className='text-white fs-30' style={{zIndex:"10"}} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">Experience<br/> unparralled comfort</h1>
        <div className='bg-dark  text-white Form_search d-lg-flex justify-content-between align-items-center w-75 px-5 py-3 rounded-pill' data-aos="fade-down" data-aos-duration="1000">
        
          <div className='searchtab pointer'>
          <p  onClick={showdatefunc}>{date?date:"Check-In Check-Out"}</p>
          {showdate?
         <div className=''>
         <div className='searchInq' data-aos="fade-up" data-aos-duration="1000">
          <input type='date' className='checkin w-100 bg-dark border-0 text-white py-2' onChange={(e) => setDate(e.target.value)}/>
         </div>
         </div>:
         ""  
        }
           
          </div>
          <div className='searchtab pointer'>
          <p onClick={showroomfunc}>Rooms  {room}</p>
          {showroom?
           <div className=''>
           <div className='searchInq' data-aos="fade-up" data-aos-duration="1000">
             <div className='d-flex justify-content-between align-items-center'>
              <p className='mb-0'>Rooms</p>
              <div className='qty'>
        <button onClick={() =>{setRoom((cnt) => cnt - 1)}}>--</button>
        <div maxLength="10 ">{room}</div>
        <button onClick={() =>{setRoom((cnt) => cnt + 1)}}>+</button>
      </div>
             </div>
            </div>
          </div>:
          ""  
        }
       
          </div>
          <div className='searchtab pointer'>
          <p  onClick={showguestfunc}>{adult?`Adults ${adult}, Childrens ${children}`:"Guest"}</p>
          {showguest?
          <div className=''>
          <div className='searchInq' data-aos="fade-up" data-aos-duration="1000">
            <div className='d-flex justify-content-between align-items-center'>
             <p className='mb-0'>Adults</p>
             <div className='qty'>
       <button onClick={() =>{setAdult((cnt) => cnt - 1)}}>--</button>
       <div maxLength="10 ">{adult}</div>
       <button onClick={() =>{setAdult((cnt) => cnt + 1)}}>+</button>
     </div>
            </div>
            <hr/>
            <div className='d-flex justify-content-between align-items-center'>
             <p className='mb-0'>Children</p>
             <div className='qty'>
       <button onClick={() =>{setChildren((cnt) => cnt - 1)}}>--</button>
       <div maxLength="10 ">{children}</div>
       <button onClick={() =>{setChildren((cnt) => cnt + 1)}}>+</button>
     </div>
            </div>
           </div>
         </div>:
         ""  
        }
        
          </div>
         
          <div className=''>
            <button onClick={checkavailable} className='button buttonLight rounded-pill'>check availability</button>
          </div>
        
        </div>
        </div>

        <section className='mt-10'>
          <div className='container'>
            <div className='row'>
            <div className='col-lg-6' data-aos="slide-up" data-aos-duration="1000">
            <p className='text-uppercase fs-15' >Steller Haven luxury hotel</p>
            <h4 className='fs-20 w-75 my-4 lh-base'>Book Your Room & Enjoy The Comfort</h4>
            <p className='w-75 mb-5'>
            Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Hotel ut nisl quam nestibulum.
            </p>
            <button className='button buttonDark mt-3 mb-3'>
              <i className='mx-2'>
            <svg width="50" height="30"  viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.8 28.0924C43.3451 28.0924 49.4616 21.9759 49.4616 14.4308C49.4616 6.88577 43.3451 0.769287 35.8 0.769287C28.255 0.769287 22.1385 6.88577 22.1385 14.4308C22.1385 21.9759 28.255 28.0924 35.8 28.0924Z" stroke="#122223"></path>
                    <path d="M33.4808 10.2039L32.9985 10.8031L37.2931 14.2623H0.341553V15.0315H37.28L33.0008 18.4262L33.4785 19.0285L39 14.6492L33.4808 10.2039Z" fill="#122223"></path>
                  </svg></i>
                  Read More
            </button>
            </div>
            <div className='col-lg-6'>
              <div className='sectionImage' data-aos="fade-left" data-aos-duration="1000">
              <img src='https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D' alt='' />
              {/* <img className='sec-img' src='https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D' /> */}
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className='bg-dark text-center text-white service-banner mt-10'>
        <p className='text-uppercase fs-15'>our services</p>
        <h4 className='fs-20' data-aos="slide-up" data-aos-duration="1000">Resort Facilities</h4>
        <div className='d-lg-flex justify-content-evenly align-items-start mt-5 '>
         <div className='d-flex flex-column py-5 px-2 service-content' data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
          <h3><i class="fa-solid fa-van-shuttle"></i></h3>
          <p className='fs-22 mt-4'>Airport transfer</p>
         </div>
         <div className='d-flex flex-column py-5 px-2 service-content' data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
          <h3><i class="fa-sharp fa-regular fa-tv"></i></h3>
          <p className='fs-22 mt-4'>Smart Tv $ Tech</p>
         </div>
         <div className='d-flex flex-column py-5 px-2 service-content' data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
          <h3><i class="fa-solid fa-wifi"></i></h3>
          <p className='fs-22 mt-4'>WI-Fi & Internet</p>
         </div>
         <div className='d-flex flex-column py-5 px-2 service-content' data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
          <h3><i class="fa-solid fa-bed-pulse"></i></h3>
          <p className='fs-22 mt-4'>Breakfast on bed</p>
         </div>
         <div className='d-flex flex-column py-5 px-2 service-content' data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
          <h3><i class="fa-solid fa-jug-detergent"></i></h3>
          <p className='fs-22 mt-4'>Laundry Service</p>
         </div>
        </div>
        </section>

        <section className='text-center mt-10'>
          <div className='' data-aos="fade-up" data-aos-duration="500">
          <p className='text-uppercase fs-15'>Explore</p>
        <h4 className='fs-20'>Luxury rooms & suits</h4>
          </div>
        
        <div className='container mt-5'>
        <div className='row'>
          
          <div className='col-lg-4'>
            <a href='#' className='text-dark text-decoration-none'>
            <div className='roomcard rounded border w-100 position-relative ' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
              <div className='bg-white text-dark r-rate py-2 px-3 fs-15 '>$499 / Night</div>
              <div className='roomImg' >
              <img className=' object-cover w-100' src='https://images.unsplash.com/photo-1578898886225-c7c894047899?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D' />
              </div>
             <Link to='/Roomsingle'><div className='bookbtn'><span className='text-uppercase'>Book now</span></div></Link> 
              <div className='roomshort-intro bg-light  px-3 py-3'>
                <h2>Luxury Suite</h2>
                <div className='d-flex justify-content-evenly align-items-center  mt-3'>
                <div className=''><i class="fa-regular fa-square mx-1"></i><span>30m<sup>2</sup></span></div>
                <div className=''><i class="fa-regular fa-user mx-1"></i><span>2</span></div>
                <div className=''><i class="fa-solid fa-bed mx-1"></i><span>1</span></div>
                <div className=''><i class="fa-solid fa-bath mx-1"></i><span>1</span></div>
              </div>
              </div>
            </div>
            </a>
          </div>
          <div className='col-lg-4'>
          <a href='#' className='text-dark text-decoration-none'>
            <div className='roomcard rounded border w-100 position-relative' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              <div className='bg-white text-dark r-rate py-2 px-3 fs-15 '>$399 / Night</div>
              <div className='roomImg'>
              <img className=' object-cover w-100' src='https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D' />
              </div>           
              <Link to='/Roomsingle'><div className='bookbtn'><span className='text-uppercase'>Book now</span></div></Link> 
              <div className='roomshort-intro bg-light  px-3 py-3'>
                <h2>Deluxe room</h2>
              <div className='d-flex justify-content-evenly align-items-center  mt-3'>
                <div className=''><i class="fa-regular fa-square mx-1"></i><span>30m<sup>2</sup></span></div>
                <div className=''><i class="fa-regular fa-user mx-1"></i><span>2</span></div>
                <div className=''><i class="fa-solid fa-bed mx-1"></i><span>1</span></div>
                <div className=''><i class="fa-solid fa-bath mx-1"></i><span>1</span></div>
              </div>
              </div>
            </div>
            </a>
          </div>
          <div className='col-lg-4'>
          <a href='#' className='text-dark text-decoration-none'>
            <div className='roomcard rounded border w-100 position-relative' data-aos="fade-right" data-aos-duration="1000" >
              <div className='bg-white text-dark r-rate py-2 px-3 fs-15 '>$399 / Night</div>
              <div className='roomImg'>
              <img className=' object-cover w-100' src='https://images.unsplash.com/photo-1578898886615-0c4719f932dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D' />
              </div>
              <Link to='/Roomsingle'><div className='bookbtn'><span className='text-uppercase'>Book now</span></div></Link> 
              <div className='roomshort-intro bg-light  px-3 py-3'>
                <h2>Dual Room</h2>
              <div className='d-flex justify-content-evenly align-items-center  mt-3'>
                <div className=''><i class="fa-regular fa-square mx-1"></i><span>30m<sup>2</sup></span></div>
                <div className=''><i class="fa-regular fa-user mx-1"></i><span>2</span></div>
                <div className=''><i class="fa-solid fa-bed mx-1"></i><span>1</span></div>
                <div className=''><i class="fa-solid fa-bath mx-1"></i><span>1</span></div>
              </div>
              </div>
            </div>
            </a>
          </div>

        </div>
        </div>
        </section>

        <section className='text-center mt-10'>
        <div className='' data-aos="fade-up" data-aos-duration="500">
        <p className='text-uppercase fs-15'>Steller Haven  LUXURY HOTEL</p>
        <h4 className='fs-20'>Exceptional gastronomy <br/>in beautiful spaces</h4>
        </div>
          <div className='container mt-5'>
            <div className='row mb-5'>
              <div className='col-lg-7' data-aos="fade-right" data-aos-duration="1500">
                  <div className='ftrImg'>
                    <img className='rounded overflow-hidden ' src='https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D' />
                  </div>
             
              </div>
              <div className='col-lg-5 text-start' data-aos="fade-up" data-aos-duration="1500">
              <div className='ftrDetail mt-5 d-flex justify-content-center align-items-start flex-column'>
                   <i className='fs-22'><i class="fa-solid fa-utensils"></i></i>
                    <h3 className='fs-45 my-5'>Restaurant</h3>
                    <p>A wonderful little place that serves up tasty food at affordable prices.</p>
                    <p><b>Open Daily: 7:00 pm - 24:00</b></p>
                    
                    <button className='button buttonDark mt-4'>----  Dinning With Us</button>
                  </div>
              </div>
            </div>
            <div className='row mb-5'>
              <div className='col-lg-7' data-aos="fade-right" data-aos-duration="1500">
                  <div className='ftrImg'>
                    <img className='rounded overflow-hidden' src='https://images.unsplash.com/photo-1600881333168-2ef49b341f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxmaXRuZXNzJTIwY2VudGVyfGVufDB8fDB8fHww' />
                  </div>
             
              </div>
              <div className='col-lg-5 text-start' data-aos="fade-up" data-aos-duration="1500">
              <div className='ftrDetail mt-5 d-flex justify-content-center align-items-start flex-column'>
                   <i className='fs-22'><i class="fa-regular fa-heart"></i></i>
                    <h3 className='fs-45 my-5'>Fitness Center</h3>
                    <p>A place where you go to exercise, for example by lifting weights or using other equipment.</p>
                    <p><b>Open Daily: 4:00 am - 24:00</b></p>
                    
                    <button className='button buttonDark mt-4'>----  Discover More</button>
                  </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-7' data-aos="fade-right" data-aos-duration="1500">
                  <div className='ftrImg'>
                    <img className='rounded overflow-hidden' src='https://images.unsplash.com/photo-1647511703603-b5dc7b01a6a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHBvb2wlMjBiYXJ8ZW58MHx8MHx8fDA%3D' />
                  </div>
             
              </div>
              <div className='col-lg-5 text-start' data-aos="fade-up" data-aos-duration="1500">
              <div className='ftrDetail mt-5 d-flex justify-content-center align-items-start flex-column'>
                   <i className='fs-22'><i class="fa-solid fa-water-ladder"></i></i>
                    <h3 className='fs-45 my-5'>Pool Bar</h3>
                    <p>It is a bar for drinking various beverages, mostly alcoholic, at a swimming pool.</p>
                    <p><b>Open Daily: 7:00 pm - 24:00</b></p>
                    
                    <button className='button buttonDark mt-4'>----  Discover More</button>
                  </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className='bg-dark text-center text-white mt-10 py-5'>
        <div className='d-lg-flex justify-content-evenly align-items-start mt-5 '>
         <div className='d-flex flex-column' data-aos="fade-down" data-aos-duration="1500" >
          <h3 className='fs-30'>25</h3>
          <p className='fs-22 mt-4'>Luxury Rooms</p>
         </div>
         <div className='d-flex flex-column' data-aos="fade-down" data-aos-duration="1500" data-aos-delay="200">
          <h3  className='fs-30'>17</h3>
          <p className='fs-22 mt-4'>Restaurants</p>
         </div>
         <div className='d-flex flex-column' data-aos="fade-down" data-aos-duration="1500" data-aos-delay="400">
          <h3 className='fs-30'>22</h3>
          <p className='fs-22 mt-4'>Private Pool</p>
         </div>
         <div className='d-flex flex-column' data-aos="fade-down" data-aos-duration="1500" data-aos-delay="600">
          <h3  className='fs-30'>10m+</h3>
          <p className='fs-22 mt-4'>Happy Customers</p>
         </div>
        </div>
        </section>

        <section className='text-center mt-10'>
          <div className='' data-aos="fade-up" data-aos-duration="500">
        <p className='text-uppercase fs-15'>Steller Haven  LUXURY HOTEL</p>
        <h4 className='fs-20'>Exceptional gastronomy <br/>in beautiful spaces</h4>
        </div>
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-lg-3' data-aos="flip-right" data-aos-duration="1500">
              <div className='activities'>
                <img src='https://images.unsplash.com/photo-1597698063932-9450882bb1be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNsaW1iaW5nfGVufDB8fDB8fHww' />
                <div className='act_Det'>
                <p className='mb-0'>Tracking</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3' data-aos="flip-left" data-aos-duration="1500" data-aos-delay="200">
              <div className='activities'>
                <img src='https://images.unsplash.com/photo-1544726368-8f4b5475a7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMGFpciUyMGJhbGxvbnN8ZW58MHx8MHx8fDA%3D' />
                <div className='act_Det'>
                  <p className='mb-0'>Hot air ballon riding</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3' data-aos="flip-right" data-aos-duration="1500" data-aos-delay="400">
              <div className='activities'>
                <img src='https://images.unsplash.com/photo-1559075471-b8a6c70b56c2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                <div className='act_Det'>
                  <p className='mb-0'>Boat trip</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3' data-aos="flip-left" data-aos-duration="1500" data-aos-delay="200">
              <div className='activities'>
                <img src='https://images.unsplash.com/photo-1591491719565-9cae8fd89f8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdvbGZ8ZW58MHx8MHx8fDA%3D' />
                <div className='act_Det'>
                <p className='mb-0'>Golf</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section className='bg-dark text-center text-white service-banner mt-10'>
          <div className='' data-aos="fade-up" data-aos-duration="500">
        <p className='text-uppercase fs-15'>@steller haven</p>
        <h4 className='fs-20'>Follow us on Instagram</h4>
        </div>
        <div className='d-lg-flex justify-content-between align-items-center mt-5' >
          <div className='socialImg' data-aos="zoom-in" data-aos-duration="1500" >
           <img src='https://images.unsplash.com/photo-1628870776167-b4b684441e10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHJlc29ydCUyMGlhbWdlc3xlbnwwfHwwfHx8MA%3D%3D' alt='Image' />
          </div>
          <div className='socialImg' data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
           <img src='https://images.unsplash.com/photo-1529316275402-0462fcc4abd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc29ydCUyMGlhbWdlc3xlbnwwfHwwfHx8MA%3D%3D' alt='Image' />
          </div>
          <div className='socialImg' data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="400">
           <img src='https://images.unsplash.com/photo-1551286923-c82d6a8ae079?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlc29ydCUyMGlhbWdlc3xlbnwwfHwwfHx8MA%3D%3D' alt='Image' />
          </div>
          <div className='socialImg' data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="600">
           <img src='https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHJlc29ydCUyMGlhbWdlc3xlbnwwfHwwfHx8MA%3D%3D' alt='Image' />
          </div>
          <div className='socialImg' data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="800">
           <img src='https://images.unsplash.com/photo-1600980938966-d97458d9a557?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHJlc29ydCUyMGlhbWdlc3xlbnwwfHwwfHx8MA%3D%3D' alt='Image' />
          </div>
        </div>
        </section>

        {/* <Footer /> */}
    </div>
  )
}

export default Home
import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Roomsingle() {

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
    <>
       <div className='Room-bg-banner d-flex justify-content-center align-items-center' data-aos="fade-right" data-aos-duration="1000">
        <div className='roomBannerContent text-white text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
        <p className='fw-bold'>$499 PER NIGHT</p>
        <h1 className='text-white fs-30'>Luxury Rooms</h1>
       <p className='px-5 mt-4'>Lavish bathrooms with upscale features such as heated floors and soaking tubs. High-end, lush linens and towels. Deluxe pillows and mattresses so your sleeping hours are as blissful as your waking ones. Beautiful views in every direction – inside and out.</p>
        </div>
      </div>

      <section className='mt-10'>
        <div className='container '>
          <div className='row'>
            <div className='col-lg-8'>
               <div className='roomIntro '>
               <p className='fw-medium'>$499 PER NIGHT</p>
                <h2>About Accomodation</h2>
                <div className='roomshort-intro py-3'>
                <div className='d-flex justify-content-start align-items-center mt-3'>
                <div className=''><i class="fa-regular fa-square mx-1"></i><span className='fs-22'>30m<sup>2</sup></span></div>
                <div className='mx-5'><i class="fa-regular fa-user mx-1"></i><span className='fs-22'>2 GUEST</span></div>
                <div className=''><i class="fa-solid fa-bed mx-1"></i><span className='fs-22'>1 BED</span></div>
                <div className='mx-5'><i class="fa-solid fa-bath mx-1"></i><span className='fs-22'>1 BATH</span></div>
              </div>
              </div>
               </div>
               <hr/>
               <div className='my-5'>
               <p>Lavish bathrooms with upscale features such as heated floors and soaking tubs. High-end, lush linens and towels. Deluxe pillows and mattresses so your sleeping hours are as blissful as your waking ones. Beautiful views in every direction – inside and out.
               </p>
               <p>These include individualized service, gourmet dining options, high-end spas, and entertainment venues, and much more to ensure that every guest has everything they need while staying with the top-rated brand. A luxury hotel is not just a place to sleep, but an experience that will last a lifetime.
               Common amenities include luxurious toiletries in the bathroom, room service, and free wireless internet throughout the property. Many four- and five-star properties go beyond the basics to include such services as dry cleaning and on-site hair and beauty services.
                </p>
                <p>
                Suites have to look like an apartment, with a separate living space and bedroom with attached bathroom. Of course, most of the times, the suites have own dining area, separate workroom, more than one bedroom, fully equipped kitchen, walk-in wardrobe, big terraces and even more.
                Luxury items have to be made out of high quality raw materials. Some leather, jewelry, and prêt-à-porter brands pay special attention to the materials or minerals used, nevertheless what is the most interesting in current times is the change in the perception of what a high quality material entails.
                Luxury items have to be made out of high quality raw materials. Some leather, jewelry, and prêt-à-porter brands pay special attention to the materials or minerals used, nevertheless what is the most interesting in current times is the change in the perception of what a high quality material entails.
                  </p> 
                  <p>These include individualized service, gourmet dining options, high-end spas, and entertainment venues, and much more to ensure that every guest has everything they need while staying with the top-rated brand. A luxury hotel is not just a place to sleep, but an experience that will last a lifetime.
               Common amenities include luxurious toiletries in the bathroom, room service, and free wireless internet throughout the property. Many four- and five-star properties go beyond the basics to include such services as dry cleaning and on-site hair and beauty services.
                </p> 
               </div>
               <hr/>
               <div className='my-5'>
               <h2>What's included in this suite?</h2>
                 <div className='roomfac'>
                  <ul className='mt-4'>
                    <li className='mb-3'>Comfortable Sofas</li>
                    <li className='mb-3'>Room safe for your top mountain photos</li>
                    <li className='mb-3'>Fully Luxury Bed</li>
                    <li className='mb-3'>Safety box</li>
                    <li className='mb-3'>Attractive lighting</li>
                    <li className='mb-3'>Mini bar</li>
                  </ul>
                 </div>
               </div>
               <hr/>
               <div className='my-5'>
               <h2>Room Rules</h2>
                 <div className='roomfac'>
                  <ul className='mt-4'>
                    <li className='mb-3'>Check-in from 9:00 AM - anytime</li>
                    <li className='mb-3'>Check-out: 11:00 AM</li>
                    <li className='mb-3'>Self-check-in with lockbox</li>
                    <li className='mb-3'>Pets are allowed</li>
                    <li className='mb-3'>No smoking</li>
                  </ul>
                 </div>
               </div>
            </div>
            <div className='col-lg-4'>
              <div className='roomaside border bg-light p-4'>
                <h2 className='mb-5'>Book Your Room</h2>
                <div className='searchtab pointer'>
          <p className='border p-3 bg-white'  onClick={showdatefunc}>{date?date:"Check-In Check-Out"}</p>
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
          <p className='border p-3 bg-white' onClick={showroomfunc}>Rooms  {room}</p>
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
          <p className='border p-3 bg-white' onClick={showguestfunc}>{adult?`Adults ${adult}, Childrens ${children}`:"Guest"}</p>
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
                 <h2 className='mt-5 mb-3'>Extra Services</h2>
                 <label><input type='checkbox' />   Service per booking <b>$30</b></label>
                 <label className='mt-2'><input type='checkbox' />   Service per person Adult  <b>$20</b></label>
                 <div className=' mt-5'>
            <button onClick={checkavailable} className='w-100 text-dark text-uppercase py-3 ' style={{backgroundColor:"#f9daba", border:"2px solid #f9daba"}}>Book Your room now</button>
          </div>
              </div>
            </div>
          </div>
        </div>


    <section className='text-center'>
      <div className='' data-aos="fade-up" data-aos-duration="1000">
      <p className='text-uppercase fs-15'>Explore room</p>
        <h4 className='fs-20' data-aos="slide-up" data-aos-duration="1000">Gallery</h4>
        <div className='grid-container p-3'>
          <div className='grid-item grid-item1'>
            {/* 1 */}
            <img src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </div>
          <div className='grid-item grid-item2'>
            {/* 2 */}
            <img src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D' />
          </div>
          <div className='grid-item grid-item3'>
            {/* 3 */}
            <img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvb218ZW58MHx8MHx8fDA%3D' />
          </div>
          {/* <div className='grid-item grid-item4'>
            4
            <img src='https://plus.unsplash.com/premium_photo-1661880010603-28d31dc051d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D' />
          </div>
          <div className='grid-item grid-item5'>
            5
            <img src='https://plus.unsplash.com/premium_photo-1661880010603-28d31dc051d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D' />
          </div>
          <div className='grid-item grid-item5'>
            6
            <img src='https://plus.unsplash.com/premium_photo-1661880010603-28d31dc051d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D' />
          </div> */}
          
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
      </section>
    </>
  )
}

export default Roomsingle
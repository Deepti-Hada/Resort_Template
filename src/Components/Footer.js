import React from 'react'

function Footer() {
  return (
    <div className='text-white mt-10 mx-2 mb-2 rounded position-relative' style={{backgroundColor:"#122223"}}>
     <div className='container p-5 '>
        <div className='w-75 p-3 rounded-pill social' style={{backgroundColor:"#122223"}}>
            <div className=''>
              
            </div>
        </div>
        <div className='mt-5'>
            <div className='col-12 '>
                <div className='position-relative bg-white w-75 m-auto'>
                    <input type='email' placeholder='Enter Your Email' className='w-100 p-3' />
                    <button className='mailBtn'>Send</button>
                </div>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-lg-4'>
                <h3 className='mb-5'>About</h3>
                <p>Duis vitae nulla at nisl finibus pharetra Nunc porttitor sapien quis euismod.</p>
            </div>
            <div className='col-lg-4'>
                <h3 className='mb-5'>Quick links</h3>
                <ul className='pl-0' style={{paddingInlineStart:"0"}}>
                    <li className='mb-2'>About</li>
                    <li className='mb-2'>Rooms</li>
                    <li className='mb-2'>Spa & wellness</li>
                    <li className='mb-2'>Restaurant</li>
                </ul>
            </div>
            <div className='col-lg-4'>
                <h3 className='mb-5'>Contact us</h3>
                <div className='mb-3 pointer'>
                <svg width="24px" height="24px" className='footerCont' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.02832 10L10.2246 14.8166C10.8661 15.2443 11.1869 15.4581 11.5336 15.5412C11.8399 15.6146 12.1593 15.6146 12.4657 15.5412C12.8124 15.4581 13.1332 15.2443 13.7747 14.8166L20.971 10M10.2981 4.06879L4.49814 7.71127C3.95121 8.05474 3.67775 8.22648 3.4794 8.45864C3.30385 8.66412 3.17176 8.90305 3.09111 9.161C3 9.45244 3 9.77535 3 10.4212V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V10.4212C21 9.77535 21 9.45244 20.9089 9.161C20.8282 8.90305 20.6962 8.66412 20.5206 8.45864C20.3223 8.22648 20.0488 8.05474 19.5019 7.71127L13.7019 4.06879C13.0846 3.68116 12.776 3.48735 12.4449 3.4118C12.152 3.34499 11.848 3.34499 11.5551 3.4118C11.224 3.48735 10.9154 3.68116 10.2981 4.06879Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                    
                <a href='' className='text-decoration-none text-white'>stellerHaven@gmail.com</a></div>
                <div className='pointer'><svg width="24px" height="24px" className='footerCont' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z" fill="#ffffff"></path> </g></svg>
                <a href='' className='text-decoration-none text-white'>+61-75547-6534</a></div>
            </div>
        </div>
        <hr/>
        <div className='row text-center'>
            <div className='col-lg-6'>
                <h2><a href='' className='text-decoration-none text-white'>Steller Haven</a></h2>
                <p className='text-uppercase '>Luxury Hotel</p>
            </div>
            <div className='col-lg-6'>
                <p>Copyright @ Steller Haven</p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Footer
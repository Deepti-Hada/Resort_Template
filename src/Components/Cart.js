import React from 'react'

function Cart() {
  return (
    <>
    <div className='Room-bg-banner d-flex justify-content-center align-items-center'>
        <div className='roomBannerContent text-white text-center'>
        <h1 className='text-white fs-30'>Cart</h1>
        <p className='px-5 mt-4'>High-end, lush linens and towels. Deluxe pillows and mattresses so your sleeping hours are as blissful as your waking ones. </p>
        </div>
      </div>
      <section className='mt-10'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-8'>
            <table class="table table-bordered">
  <thead  className="">
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Luxury Villa Suite</th>
      <td>$568.45</td>
      <td>1</td>
      <td>$568.45</td>
    </tr>
   
   
  </tbody>
</table>
<div className='d-flex justify-content-between align-items-center'>
<div className=' mt-5'>
            <button  className='text-dark text-uppercase py-3 px-5 fw-medium' style={{backgroundColor:"#f9daba", border:"2px solid #f9daba"}}>Apply coupen</button>
          </div>
          <div className=' mt-5'>
            <button  className='text-dark text-uppercase py-3 px-5 fw-medium' style={{backgroundColor:"#f9daba", border:"2px solid #f9daba"}}>Coupen code</button>
          </div>
          <div className=' mt-5'>
            <button  className=' text-dark text-uppercase py-3 px-5 fw-medium' style={{backgroundColor:"#f9daba", border:"2px solid #f9daba"}}>Update Cart</button>
          </div>
</div>
            </div>
            <div className='col-lg-4'>
                <div className='cartaside p-4 bg-light'>
                    <h2 className='mb-4'>Cart Totals</h2>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='fw-medium'>Subtotal</p>
                        <p className='fw-medium'>$563</p>
                    </div>
                    <hr/>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='fw-medium'>Total</p>
                        <p className='fw-medium'>$563</p>
                    </div>
                    <div className=' mt-5'>
            <button  className='w-100 text-dark text-uppercase py-3 fw-medium' style={{backgroundColor:"#f9daba", border:"2px solid #f9daba"}}>Proceed to checkout</button>
          </div>
                </div>
            </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Cart
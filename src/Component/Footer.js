import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="foot bg-black">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4 col-md-7">
                        <img src={require('../img/logo.png')} alt="" />
                        <p className='mt-3'>Lorem ipsum dolor sit amet, consect adipiscing elit est pellen</p>
                    </div>
                    <div className="col-lg-3 col-md-5">
                        <p className='fw-semibold'>Contact</p>
                        <p>754 NE 60th St Miami, FL 33879</p>
                        <p>Call us FREE +1 (800) 990 8877</p>
                        <p>eiddo@qodeinteractive.com</p>
                    </div>
                    <div className="col-lg-5">
                        <p className='fw-semibold'>Newsletter Subscribe</p>
                        <div className="d-flex">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email Address Here' />
                            <button type="button" class="btn "> SUBMIT</button>


                        </div>
                        <p className='mt-3'>Don’t forget to follow us on:</p>
                        <div className="icons">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                            <i class="fa fa-youtube" aria-hidden="true"></i>
                            <i class="fa fa-pinterest" aria-hidden="true"></i>
                        </div>
                    </div>
                    <p className='text-center mt-5'>© 2018 Qode Interactive, All Rights Reserved</p>
                </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'
import EmployeeData from '../Data/EmployeeData'
export default function AboutUs() {
  return (
    <>
      <div className="about">
        <div className=" about1 text-light text-center d-flex align-items-center justify-content-center flex-column ">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempore incididunt ut <br /> labore et dolore magna aliqua, rhoncus est</p>
        </div>
      </div>
      <div className="container boys">
        <div className="row">
          <div className="col-lg-6 col-md-10 boy">
            <img src={require('../img/boys.jpg')} alt="" className='w-100' />
          </div>
          <div className="col-lg-6 about2 mt-5 col-md-12  ">
            <p className='text-body-secondary fs-6'>SEARCH PLACES</p>
            <h2 className='fw-normal'>People's Experiences</h2>
            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellen tesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Et netus malesuada fames ac turpis egestas nisl vel.</p>
            <p className='text-info-emphasis fs-5'>“Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.”</p>
            <button type="button" className="btn">Search</button>
          </div>
        </div>
      </div>
      <div className=" mb-5 container ">
        <div className="row">
        {EmployeeData.map((a) => (
          <div className="col-lg-3 col-md-6 position-relative end">
            <img src={a.img} alt="" className='w-100 mt-4' />
            <div className="info text-light position-absolute bottom-0 py-1">
              <p className='fw-bold ms-2 m-0'>{a.name}</p>
              <p className='ms-2'>{a.job}</p>
              <div className="icon ">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        ))}
        </div>
        
      </div>
      <div className="container search my-5">
        <div className="row">
          <div className="col-lg-7 mt-5 mb-5">
            <h1>Searching For the best places?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellen tesque elit ullam corper dignissim cras tincidunt lobortis feugiat. Et netus malesuada.</p>
            <button type='button' className='btn'>Search</button>
          </div>
          <div className="col-lg-5">
            <img src={require('../img/pine.jpg')} alt="" className='pine' />
          </div>

        </div>
      </div>

    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
export default function RightSidebar() {
  return (
    <>
    <div className="bg-gray">
      <div className='shop-banner position-relative band'>
        <nav aria-label="breadcrumb" className='bread position-absolute text-center'>
          <h2 className='text-black fw-normal'>BLOG</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">RightSideBar</li>
          </ol>
        </nav>
      </div>
      <br />
      <div className=" mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 blog p-4 bg-white mx-2">
              <img src={require('../img/room.jpg')} className="w-100" alt="" />
              <p className='text-body-secondary mt-3'>LIFESTYLE BY ANGELA MATHIS</p>
              <h2>Newly-launched campaignin Whitby agencies Brooklin, come to see cozy Place</h2>
              <p>Cibo euripidis ut qui, sumo mnesarchum no his. Ius magna pertinax cu, cu cum summo erant, percipit adipisci nam an. Eu vim delectus tractatos sapientem, mel te nullam dicunt epicurei. Eligendi appetere et mei, ex nec aeterno nominavi consetetur recusabo.. </p>
            </div>
            <div className="col-lg-3 bg-white ms-4">
              <h3 className='bg-black text-light p-3'>About Me</h3>
              <div className="redhair p-3">
                <img src={require('../img/red.jpg')} className="w-100" alt="" />
                <div className="mt-4">
                  <p> Libero id faucibus nisl lorem tincidunt. Sit amet tellus et cras adipiscing in arcu curs</p>
                  <p> <i class="fa fa-envelope-o" aria-hidden="true"></i> <a href="mailto:some@email.com">angela@qodeinteractive.com
                  </a> </p>
                  <p> <i class="fa fa-link" aria-hidden="true"></i> http://qodeinteractive.com</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      </div>
    </>



  )
}

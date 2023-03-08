import React from 'react'
import FeaturesData from '../Data/FeaturesData'
export default function Features() {
  return (
    <>
      <div className="feature mb-5">
        <div className="container">
          <h1 className='check mt-5 mb-5'>Check out our featured items</h1>
          <div className="row row-gap-3">
            {FeaturesData.map((a) => (
              <div className="col-lg-4 col-md-6">
                <div className="pic">
                  <img src={a.url} alt="" />
                  <div className="text">
                  <h2>{a.title}</h2>
                  <p>{a.body}</p>
                  <p>{a.price}</p>
                  </div> 
                  <p className='tag px-1'>{a.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </>
  )
}

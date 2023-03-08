import React from 'react'

export default function Oxford() {
    return (
        <>
            <div className=" container featured">
                <h1 className='mb-4'>Featured</h1>
                <div className="row">
                    <div className="col-lg-7 frame mt-5 me-4">
                        <img src={require('../img/lake.jpg')} alt="" className='w-100'/>
                        <img src={require("../img/stool.jpg")}  className="stool"/>

                    </div>

                    <div className="col-lg-4 ms-5 featured-details">
                        <h3 className='text-body-tertiary'>$80,000</h3>
                        <h4>109 Oxford St Soho</h4>
                        <p>Property size:</p>
                        <p>52m2</p> <br />
                        <p>Structure:</p>
                        <p>1 Bedroom</p> <br />
                        <p>Accommodation:</p>
                        <p>Furnished</p> <br />
                        <p>Heating:</p>
                        <p>Floor Heating</p>
                    </div>
                </div>
            </div>
            <h4 className='apart'>Apartments from Heaven</h4> 

        </>
    )
}

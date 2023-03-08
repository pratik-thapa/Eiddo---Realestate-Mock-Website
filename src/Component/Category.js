import React from 'react'
import CategoryData from '../Data/CategoryData'

export default function Category() {
    return (
        <>
            <div className="cat bg-gray mt-5 p-4">
                <div className="row">
                {CategoryData.map((a) => (
                    <div className="col-lg-3 col-md-12 container">
                            <div className="text-center p-5">
                                <div className="man">
                                    <img src={a.img} alt="" />
                                    <p className='num'>{a.num}</p>
                                </div>

                                <p className='fw-semibold fs-5 mt-3'>{a.title}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                       
                    </div>
                     ))}
                </div>


            </div>


        </>
    )
}

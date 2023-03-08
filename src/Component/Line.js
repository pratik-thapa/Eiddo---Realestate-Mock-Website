import React from 'react'
import ProductData from '../Data/ProductData'
import { Link } from 'react-router-dom'
export default function Line() {
    const sliceData = ProductData.slice(6, 10)
    return (
        <div className="container">
            <h4 className='fs-3'>Related Products</h4>
            <div className="row">
                {sliceData.map((a) => (
                    <div className="col-lg-3 col-md-6 my-5">
                        <div className="inside">
                            <img src={a.img} alt="" className='w-100' />
                            <button type="button" className="btn w-100">Add to cart</button>
                        </div>
                        <div className="d-flex justify-content-between mt-2 p-2">
                            <p className='fw-semibold m-0'> <Link to={`/Description/${a.id}`}>{a.name}</Link>  </p>
                            <p className='fs-5 text-success-emphasis fw-semibold m-0'>{a.price}</p>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

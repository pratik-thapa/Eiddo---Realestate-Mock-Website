import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../app/counterslice';

export default function Product({id,img,name,price}) {
    const dispatch =useDispatch();
  return (
    <div className="col-lg-4 col-md-6 p-3 small">
                                        <div className="inside">
                                            <img src={img} alt="" className='w-100' />
                                            <button type="button" className="btn w-100" onClick={()=> dispatch(addToCart({id,img,name,price}))}>Add to cart</button>
                                        </div>
                                        <div className="d-flex justify-content-between mt-2 p-2">
                                            <p className='fw-semibold m-0'> <Link to={`/Description/${id}`}>{name}</Link>  </p>
                                            <p className='fs-5 text-success-emphasis fw-semibold m-0'>{price}</p>
                                        </div>
                                        <div className="star px-2 ">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                    </div>
  )
}

import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductData from '../Data/ProductData';
export default function Productdes() {
    const [count, setCount] = useState(0)
    let { id } = useParams()
    let displayData = ProductData.find((a) => a.id === id)
    return (
        <>

            <div className='shop-banner position-relative band'>
                <nav aria-label="breadcrumb" className='bread position-absolute text-center'>
                    <h2 className='text-black fw-normal'>Shop</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/Shop">Shop</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Description</li>
                    </ol>
                </nav>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-5 col-md-10 bander">
                        <img src={displayData.img} className="w-100"
                            alt="" />
                    </div>

                    <div className="col-lg-5 col-md-12 banger">
                        <h1>{displayData.name}</h1>
                        <div className="star ">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i> <nbsp />
                            <span>(1 customer review)</span>

                        </div>
                        <h3 className='fw-normal my-1'>{displayData.price}</h3>
                        <p>Lorem ipsum dolor sit amet, sea an mutat populo facilis, nisl blandit sea ne, eum hinc omnium scripta et. Laudem delicatissimi duo no. Hinc wisi cetero cum at, te persius fabulas.
                        </p>

                        <div className="counter d-flex">
                            <h5> {count}</h5>

                            <button onClick={() =>setCount(count+1) }>
                                +
                            </button>
                            <button onClick={() => setCount(count-1) }>
                                -
                            </button>

                            <button type="button" className="btn w-25 ms-3 add">Add to cart</button>
                        </div>
                        <div className="mt-2">
                            <p>SKU: 001 <br />
                                Category: Furniture <br />
                                Tags: fashion, mettalics, organic</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center w-25 m-0">
                            <p className='m-0'>Share:</p>
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                            <i className="fa fa-youtube" aria-hidden="true"></i>
                            <i className="fa fa-pinterest" aria-hidden="true"></i>
                        </div>
                        <ul className="nav nav-tabs my-4" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button class="nav-link active" id="des-tab" data-bs-toggle="tab" data-bs-target="#des-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Description</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Additional Information</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Reviews</button>
                            </li>

                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="des-tab-pane" role="tabpanel" aria-labelledby="des-tab" tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam maiores nam tenetur vel earum nihil tempora iure ratione, quidem suscipit nulla neque qui id rem ex, officiis voluptates perspiciatis.</div>
                            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0"><p>Weight	5 kg </p>
                                <p>  Dimensions	50 × 50 × 70 cm</p>
                            </div>
                            <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">Hello</div>
                           
                        </div>
                    </div>
                </div>

            </div>


        </>


    )
}


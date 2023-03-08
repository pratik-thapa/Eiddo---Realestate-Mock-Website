import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Component/Product';
import ShopData from '../Data/ShopData'
export default function Shop_list() {
    const SliceData = ShopData.slice(3, 7);
    return (
        <>

            <div className='shop-banner position-relative band'>
                <nav aria-label="breadcrumb" className='bread position-absolute text-center'>
                    <h2 className='text-black fw-normal'>Shop</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Shop List</li>
                    </ol>
                </nav>
            </div>
            <div className="bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 bg-white my-5 p-3">
                            <div className="row ">
                                {ShopData.map((a) => (
                                    <Product key={a.id} {...a}/>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 bands">
                            <div className="categories my-5 bg-white ms-4 ">
                                <h4 className='bg-black text-white p-3 fs-6'>Product Categories</h4>
                                <div className="p-2 design fw-medium fs-6">
                                    <p>Design</p>
                                    <p>Furniture</p>
                                    <p>Interior</p>
                                    <p>Lifestyle</p>
                                    <p>Modern</p>
                                    <p>Style</p>
                                </div>
                            </div>
                            <div className="bond ms-4">
                                <img src={require('../img/band.jpg')} alt="" className=" w-100" />
                            </div>

                            <div className="categories my-5 bg-white ms-4  ">
                                <h3 className='bg-black text-white p-3 fs-6'>Related Products</h3>
                                {SliceData.map((a) =>
                                    <div className="row my-2 p-3 ">
                                        <div className="col-lg-5 col-md-4 col-sm-4">
                                        <img src={a.img} alt="" className='w-100' />
                                        </div>
                                      
                                        <div className="col-lg-6 col-md-4 col-sm-6">
                                            <p className='fw-semibold m-0'> <Link to={`/Description/${a.id}`}>{a.name}</Link>
                                            </p>
                                            <div className="star ">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            <p className='fs-5 text-success-emphasis fw-semibold m-0'>{a.price}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>



    )
}


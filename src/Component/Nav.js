import React from 'react'
import {
    createBrowserRouter,
    Route,
    Link,
    Routes,
} from "react-router-dom";
import Home from '../Page/Home';
import Pages from '../Page/Pages';
import AboutUs from '../Page/AboutUs';
import Shop_list from '../Page/Shop_list';
import Description from '../Page/Description';
import RightSidebar from '../Page/RightSidebar';
import Cart from '../Page/Cart';


export default function Nav() {
    return (
        <>
            <div className="row bg-black align-items-center p-2 sticky-top">
                <div className=" col col-lg-4 mt-2 col-md-7 ">
                    <div className="row align-items-center">
                        <div className="col-5 col-lg-3 col-md-6  ">
                            <Link to="/"> <img src={require('../img/logo.png')} className="eddio w-100 p-2" alt="" /> </Link>
                        </div>

                        <div className="col-7 col-lg-9 col-md-6 text-light fs-7 text">
                            <p className=' unique border-start px-2 mb-0'>Unique Places to Stay</p>
                        </div>

                    </div>
                </div>
                <div className=" col col-lg-8 col-md-5">
                    <div className="row align-items-center">
                        <div className="col-2 col-lg-8 col-md-3 text-end  ">
                            <nav className="navbar navbar-expand-lg bg-black">
                                <div className="container-fluid second">

                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item dropdown ">
                                                <Link className="nav-link active text-light" aria-current="page" to="/">HOME</Link>
                                                <ul className="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Main Home</a></li>
                                                    <li><a class="dropdown-item" href="#">Real Estate Agency</a></li>
                                                    <li><a class="dropdown-item" href="#">Apartments Home</a></li>
                                                    <li><a class="dropdown-item" href="#">Map Home</a></li>
                                                    <li><a class="dropdown-item" href="#">City Properties</a></li>

                                                </ul>

                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link text-light" to="PAGES">PAGES</Link>

                                                <ul className="dropdown-menu">
                                                    <li> <Link className="dropdown-item" to={"/About"}>About Us</Link></li>
                                                    <li><a class="dropdown-item" href="#"> Process here</a></li>
                                                    <li><a class="dropdown-item" href="#"> Pricing Packages</a></li>
                                                    <li><a class="dropdown-item" href="#"> 404 page</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-light" to="LISTINGS">LISTINGS</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link text-light">BLOG</Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="RightSidebar">Right Sidebar</Link></li>
                                                    <li><Link class="dropdown-item" href="#">Left Sidebar</Link></li>
                                                    <li><a class="dropdown-item" href="#">No Sidebar</a></li>
                                                    <li><a class="dropdown-item" href="#">Single Post</a></li>
                                                </ul>
                                            </li>

                                            <li className="nav-item dropdown">
                                                <a class="nav-link text-light " href="#">SHOP</a>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="/Shop">Shop List</Link></li>
                                                    <li><a class="dropdown-item" href="#">Shop Single</a></li>
                                                    <li><a class="dropdown-item" href="#">Shop Layouts</a></li>
                                                    <li><a class="dropdown-item" href="#">Shop Pages</a></li>
                                                </ul>

                                            </li>

                                            <li className="nav-item">
                                                <Link className="nav-link text-light" to="Description">ELEMENTS</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-10 col-lg-4 col-md-8 third text-end">
                            <Link to="/cart"><i className="fa fa-shopping-basket text-light unique" aria-hidden="true"></i></Link>
                            <button type="button" className="btn1 btn-secondary mx-3 unique ">Add Listing +</button>
                            <button type="button" className='bg-black ' data-bs-target="#exampleModalToggle" data-bs-toggle="modal"> <i class="fa fa-user text-light" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="btn w-50 p-2" ata-bs-target="#exampleModalToggle" data-bs-toggle="modal">Login</button>
                            <button className="btn1 w-50 " data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Register</button>
                        </div>
                        <div className="modal-body px-4">
                            <input type="email" placeHolder='Email*' className='w-100 p-2' />
                            <input type="password" placeHolder='Password*' className='w-100 p-2 mt-4' />
                            <div className="dflex justify-content-between">
                                <div className="input-group my-3 d-flex justify-content-between align-items-center">
                                    <div className="input-group-text ">
                                        <input className="form-check-input mt-0 me-2 " type="checkbox" value="" aria-label="Checkbox for following text input" />
                                        <p className='mt-3'>Remember me?</p>
                                    </div>
                                    <p className='mt-2'>Forgot Password?</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer p-3 text-center">
                            <button className='btn  w-100 p-2' >LOGIN</button>
                            <p className='w-100'>or Connect with Social Networks</p>
                            <i className="fa fa-facebook-official w-100" aria-hidden="true"></i>
                            <p className='w-100'>By creating an account you are accepting our Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="btn btn-primary w-50 p-2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Login</button>
                            <button className="btn1 btn-primary w-50" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Register</button>

                        </div>
                        <div className="modal-body px-5">
                            <input type="text" placeHolder='Username*' className='w-100 p-2 my-3' />
                            <input type="email" placeHolder='Email*' className='w-100 p-2' />
                            <input type="password" placeHolder='Password*' className='w-100 p-2 my-3' />
                            <input type="password" placeHolder='Re-enter Password*' className='w-100 p-2 ' />
                        </div>
                        <div className="modal-footer">
                            <p class='p-2'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="" className='text-info-emphasis'>privacy policy.</a> </p>
                            <div className="options1 w-100 px-3">
                                <select className='m-3 p-2'>
                                    <option value="All Locations">Agency</option>
                                    <option value="Paris">Owner/Buyer</option>
                                    <option value="Amsterdam">Agent</option>
                                </select>
                            </div>
                        <button className="btn w-100 p-2 mb-3">Login</button>    
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Pages" element={<Pages />} />
                <Route path="/About" element={<AboutUs />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Shop" element={<Shop_list />} />
                <Route path='RightSideBar' element={<RightSidebar />} />
                <Route path="Description/:id" element={<Description />} /> 
            </Routes>




        </>
    )
}

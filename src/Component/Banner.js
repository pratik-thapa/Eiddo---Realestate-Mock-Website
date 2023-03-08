import React from 'react'

export default function Banner() {
    return (
        <>
            <div className="box d-flex align-items-center justify-content-center flex-column ">
                <img src={require('../img/sign.png')} alt="" />
                <h1 className='text-light mt-3 text-center'>All you need is one click away.
                </h1>
                <div className="options mt-3">
                    <ul>
                        <li> <i className="fa fa-building px-2 " aria-hidden="true"></i><a href="">Apartments</a></li>
                        <li><i class="fa fa-users px-2 " aria-hidden="true"></i> <a href="">Condominium</a></li>
                        <li> <i class="fa fa-home px-2 " aria-hidden="true"></i><a href="">House</a></li>
                        <li> <i class="fa fa-print px-2 " aria-hidden="true"></i> <a href="">Office</a></li>
                        <li> <i class="fa fa-shopping-bag px-2 " aria-hidden="true"></i><a href="">Shop</a></li>
                    </ul>
                </div>
                <div className="options1">
                <select className='m-3 p-2'>
                    <option value="All Locations">All Destinations</option>
                    <option value="Paris">Paris</option>
                    <option value="Amsterdam">Amsterdam</option>
                    <option value="London">London</option>
                    <option value="NewYork">NewYork</option>
                    <option value="Lucerne">Lucerne</option>
                </select>

                <select className='p-2'>
                    <option value="All Status">All Status</option>
                    <option value="Rent">For Rent</option>
                    <option value="Sale">For Sale</option>
                    <option value="Sold">Just Sold</option>
                </select>
                </div>   
                <button class="btn" type="submit">SEARCH PLACES</button>            
            </div>
          
        </>
    )
}

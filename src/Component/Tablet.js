import React from 'react'

export default function Tablet() {
    return (
        <div className="container mt-5 mb-5 tab">
            <div className="row">
                <div className="col-lg-6">
                    <img src={require('../img/tablet.png')} alt="" className='w-100'/>
                </div>
                <div className="col-lg-6">
                    <h6>
                        SEARCH PLACES</h6>
                    <h1>
                        People's Experiences</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellen tesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Et netus malesuada fames ac turpis egestas. Nisl vel pretium.</p>
                    <button type="button" class="btn ">Search Places</button>    
                </div>
            </div>
        </div>
    )
}

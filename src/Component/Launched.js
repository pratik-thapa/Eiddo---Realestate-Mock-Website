import React from 'react'

export default function () {
  return (
    <>
    <div className="row bg-gray mt-4 mb-5">
        <div className="col-lg-6 text-start d-flex align-items-center justify-content-center mt-5 ">
            <div className="one">
            <h2 className='fs-1' >Newly-launched campaign in <br/>Whitby agencies</h2>
            <p>- Ut aliquam purus sit amet luctus</p>
            <p>- Duis convallis convallis tellus id</p>
            <p>- Aliquet risus feugiat ante dictum at </p>
            <p>- Sit amet justo donec enim diam vul</p>
            <p>- Nisi vitae suscipit tellus mauris</p>
            <img src={require('../img/sign2.png')} alt="" />
            </div>
           
        </div>
        <div className="col-lg-6">
            <img src={require('../img/launched.jpg')} alt="" className='w-100'/>

        </div>
    </div>
    
    </>
  )
}

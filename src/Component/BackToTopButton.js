import React, { useEffect, useState } from 'react'
export default function BackToTopButton() {
    const [BackToTopButton, setBackToTopButton] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", ()=>{
          if(window.scrollY > 120)  {
            setBackToTopButton(true)
          }
          else{
            setBackToTopButton(false)
          }
        })
    }, [])
    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behaviour:"smooth"
        })
    }
  return (
    <div>
      {BackToTopButton && (
        <button onClick={scrollUp} className='bg-success p-3' style={{position:"fixed",bottom:"50px", right:"40px", border:"none"}}><i className="fa fa-arrow-up text-light" aria-hidden="true"></i></button>
      )}
    </div>
  )
}

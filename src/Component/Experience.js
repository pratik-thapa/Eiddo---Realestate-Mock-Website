import React from 'react'
import ExperienceData from '../Data/ExperienceData'
export default function Experience() {
    return (
        <>
            <div className="container mt-5">
                <p>SEARCH PLACES</p>
                <h1 className='mb-5'>People's Experiences</h1>
                <div className="row">
                    {ExperienceData.map((a) => (
                        <div className="col-lg-6 mb-4">
                            <div className="row mt-4">
                                <div className="col-lg-2">
                                    <img src={a.url} alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <p className='fw-semibold fs-5 text'>{a.title}</p>
                                    <p >{a.body}</p>
                                </div>
                                <p>{a.des}</p>
                            </div>
                        </div>

                    ))}
                </div>



            </div>

        </>
    )
}

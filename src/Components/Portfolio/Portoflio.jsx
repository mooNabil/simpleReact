
import React from 'react'
import img1 from "../imgs/img1.png"
import img2 from "../imgs/img2.png"
import img3 from "../imgs/img3.png"


export default function () {
    return (

        <>
            <div className='portfolio'>
                <div className="container h-100">
                    <div className=' d-flex justify-content-center align-items-center h-100 flex-column text-black'>
                        <h2 className=' fs-1 fw-bold headStyle '> PORTFOLIO COMPONENT </h2>
                        <span className='leftLine bg-black'>  </span>  <i class="fa-regular fa-star starStyle"></i>  <span className=' bg-black rightLine'>  </span>

                        <div className=" row mt-3">

                            <div className="col-md-4  py-3">
                                <img className=' w-100 rounded-3' src={img1} />
                            </div>

                            <div className="col-md-4  py-3">
                                <img className=' w-100 rounded-3' src={img2} />
                            </div>


                            <div className="col-md-4  py-3">
                                <img className=' w-100 rounded-3' src={img3} />
                            </div>


                            <div className="col-md-4  py-3">
                                <img className=' w-100 rounded-3' src={img1} />
                            </div>

                            <div className="col-md-4  py-3">
                                <img className=' w-100 rounded-3' src={img2} />
                            </div>

                            <div className="col-md-4  py-3">
                                <img className=' w-100 rounded-3' src={img3} />
                            </div>



                        </div>


                    </div>
                </div>



            </div>

        </>
    )
}

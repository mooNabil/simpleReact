
import React from 'react'
import "/Rout/React Assignment 1/app/src/Components/style.css"


export default function () {
    return (
        <>


            <div className='Contact'>

                <div className="container h-100">

                    <div className=' d-flex flex-column justify-content-center align-items-center h-100'>
                        <h2> CONATCT SECTION </h2>
                        <span className='leftLine bg-black'>  </span>  <i class="fa-regular fa-star starStyle"></i>  <span className=' bg-black rightLine'>  </span>

                        <form className=' w-100'>

                            <input type="text" placeholder='uerName' className=' form-control w-50 me m-auto mt-4' />
                            <input type="number" placeholder='uerAge' className=' form-control w-50 me m-auto my-4' />
                            <input type="email" placeholder='uerEmail' className=' form-control w-50 me m-auto mb-4' />
                            <input type=" passowrd" placeholder='uerPassowrd' className=' form-control w-50 me m-auto' />
                            <div className=' w-100 '>
                                <button type='reset' className=' btn mt-4 btn-success contactBtn'> send Message</button>
                            </div>


                        </form>

                    </div>

                </div>

            </div>


        </>
    )
}

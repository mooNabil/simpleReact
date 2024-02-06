
import React from 'react'
// import "/Rout/React Assignment 1/app/src/Components/style.css"

import avatar from "../imgs/avatar.svg"

export default function
    () {
    return (
        <>

            <div className='home'>

                <div className=' d-flex flex-column justify-content-center align-items-center text-white h-100'>
                    <img className='avatar' src={avatar} />
                    <h1 className=' py-4'> START FRAMEWORK </h1>
                    <span className='leftLine'>  </span>  <i class="fa-regular fa-star starStyle"></i>  <span className='rightLine'>  </span>
                    <p className=' pt-3'> Graphic Artist - Web Designer - Illustrator </p>
                </div>

            </div>

        </>
    )
}

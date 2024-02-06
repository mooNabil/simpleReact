import React from 'react'
// import "/Rout/React Assignment 1/app/src/Components/style.css"

export default function Footer() {
    return (

        <>

            <div className=''>

                <div className='  foterContent  text-white d-flex justify-content-around'>

                    <div>
                        <h4> LOCATION </h4>
                        <p> 2215 John Daniel Drive</p>
                        <p> Clark, MO 65243</p>
                    </div>

                    <div className='text-center'>
                        <h5 className='mb-4'>AROUND THE WEB</h5>
                        <ul className='footer-li d-flex p-0 justify-content-center'>
                            <li> <i class="fa-brands fa-facebook"></i></li>
                            <li> <i class="fa-brands fa-twitter"></i></li>
                            <li> <i class="fa-brands fa-linkedin"></i></li>
                            <li> <i class="fa-solid fa-globe"></i></li>
                        </ul>
                    </div>

                    <div>
                        <h5>
                            ABOUT FREELANCER</h5>
                        <p> Freelance is a free to use, licensed Bootstrap theme created by Route</p>

                    </div>
                </div>

                <div className='bg-dark text-white py-4'>
                    <p className='text-center'>Copyright © Your Website 2021</p>
                </div>

            </div>

        </>
    )
}

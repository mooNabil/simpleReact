
import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>

            <nav class="navbar navbar-expand-lg py-4  fixed-top">
                <div class="container">
                    <Link class="navbar-brand text-white fs-2 fw-bold" to="">START FRAMEWORK</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto text-white">
                            <li class="nav-item">
                                <Link class="nav-link text-white fw-medium" to="about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white fw-medium" to="Portfolio">Portfolio</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white fw-medium" to="contact">Contact</Link>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

import React from 'react';
import furnit from './Images/furnit.svg';
import search from './Images/search.svg';
import profile from './Images/profile.svg';
import cart from './Images/cart.svg';
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class=" ms-3 navbar-brand mt-0 pt-0" href="#">
                        <img src={furnit} alt="" width="70" height="50" class="d-inline-block align-text-top" />
                    </a>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarText">
                        <ul class="nav">
                            {/* <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" to="/" role="button">Home</Link>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            <li class="nav-item ">
                                <Link class="nav-link text-secondary" to="homepage">Home</Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link text-secondary" to="shop">Shop</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-secondary" to="blog">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-secondary" to="aboutUs">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-secondary" to="contactUs">Content</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-secondary" to="/team">Team</Link>
                            </li>
                        </ul>
                    </div>
                    <span class="navbar-text me-3">
                        <a class=" ms-3 navbar-brand mt-0 pt-0" href="#">
                            <img src={search} alt="" width="20" height="50" class="d-inline-block align-text-top" />
                        </a>
                        <a class=" ms-3 navbar-brand mt-0 pt-0" href="#">
                            <img src={profile} alt="" width="20" height="50" class="d-inline-block align-text-top" />
                        </a>
                        <a class="ms-3 navbar-brand mt-0 pt-0" href="#">
                            <Link to="/cart">
                                <img src={cart} alt="" width="20" height="50" class="d-inline-block align-text-top" />
                            </Link>
                        </a>
                    </span>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <Link className=" btn border-0 hover:bg-white normal-case text-3xl font-bold p-0">
                    <img src={logo} alt="logo" className='h-full' />
                    <span className='text-primary'>ReSale</span> <span className='text-secondary'>Nest</span>
                </Link>
                <p>Resale Nest Ltd.<br />Used Products Resale Market</p>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;
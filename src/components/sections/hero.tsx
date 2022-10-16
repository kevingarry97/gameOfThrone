import React from 'react';
import HeroImg from '../../assets/images/HeroImg.png';

const HeroSection = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 my-4">
                    <h1 className='text-white f-80 font-weight-bold d-md-block d-none'>Enjoy.Choose. Play</h1>
                    <h1 className='text-white font-weight-bold d-md-none d-block'>Enjoy.Choose. Play</h1>
                    <div className='d-flex align-items-center ml-3 text-danger'><div className='w-25'/> <b>What we Do</b></div>
                    <p className='text-muted py-4'>We enjoy having you in our delightful space, <br /> and great experience.</p>
                    <button className='btn btn-primary rounded px-4'><small><b>Contact Us</b></small></button>
                </div>
                <div className="col-md-6 offset-md-1 my-4">
                    <img src={HeroImg} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
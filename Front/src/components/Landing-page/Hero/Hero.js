import React from 'react';
import './Hero.css';
import heroImage from '../../../images/slider-icon.png';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Hero = () => {
  return (
    <>
    <div className="hero-area" id="Hero">
      <div className="container">
        <div className="row mt-5 align-items-center">
          <div className="col-md-6 mb-5">
            <h2 className="mb-4">The Online Resume Builder <br /> You Deserve</h2>
            <p>Creating a Professional Resume and Cover Letter Has Never Been <strong>So Easy</strong> </p>
            <button className="nav-link btn btn-primary">
              <Link to='/Login'>Lets Login</Link>
            </button>
          </div>
          <div className="col-md-6">
            <img src={heroImage} className="rounded img-fluid d-block mx-auto" alt="Hero-Image" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;

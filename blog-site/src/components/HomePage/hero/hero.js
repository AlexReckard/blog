import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import './hero.css';  

import featuredImg from "../../../images/featured.png";
import smallImg1 from "../../../images/small-1.png";
import smallImg2 from "../../../images/small-2.png";
import lottie from "lottie-web";

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets6.lottiefiles.com/packages/lf20_P4RBQZ.json'
    });
  }, [])

  return (
    <div className="hero-container">
        <div className="hero">
            <div className="hero-featured">
                <Link to="/#"><img src={featuredImg} alt="Featured" /></Link>
                <div className="text-overlay">
                    <h2>Artificial Intelligence: Boom or Gloom? Unveiling the Reality.</h2>
                    <p>03/12/23</p>
                </div>
            </div>
            <div className="hero-small">
                <Link to="/#"><img src={smallImg1} alt="Small 1" /></Link>
                <div className="text-overlay">
                    <h3>5 Ways to Declutter and Find Serenity</h3>
                    <p>03/09/23</p>
                </div>
            </div>
            <div className="hero-small">
                <Link to="/#"><img src={smallImg2} alt="Small 2" /></Link>
                <div className="text-overlay">
                    <h3>Van Gogh Exhibit: My Enchanting Journey</h3>
                    <p>03/06/23</p>
                </div>
            </div>
        </div>
        <div className="lottie-scroll-container" id="lottie-scroll" ref={container}></div>
    </div>
  );
};
  
export default Hero;

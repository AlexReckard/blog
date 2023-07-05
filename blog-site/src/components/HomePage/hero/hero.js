import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import './hero.css';  
import lottie from "lottie-web";

const Hero = ({ articles }) => {
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
            {articles.map((article, index) => (
                <div key={`${article.id}-${index}`} className={index === 0 ? "hero-featured" : "hero-small"}>
                    <Link to={`/category/${article.category}${article.slug}`}><img src={article.image.publicURL} alt={article.alt} /></Link>
                    <div className="text-overlay">
                        <h2>{article.title}</h2>
                        <p>{article.date}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="lottie-scroll-container" id="lottie-scroll" ref={container}></div>
    </div>
  );
};
  
export default Hero;

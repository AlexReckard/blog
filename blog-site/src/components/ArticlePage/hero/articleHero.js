import React from 'react';
// import { Link } from 'gatsby';
import './articleHero.css';  

import articleImg from '../../../images/kaws1.png';


const ArticleHero = () => {
  return (
    <div className="article-hero-container"> 
        <div className='article-hero'>
            <div className='article-img'>
              <figure>
                <img src={articleImg} alt='kaws artwork'></img>
                <figcaption>Photo By: Artist</figcaption>
              </figure>
                
            </div>   
        </div>
    </div>
  );
};

export default ArticleHero; 
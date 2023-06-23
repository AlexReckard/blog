import React from 'react';
// import { Link } from 'gatsby';
import './categoryHero.css';  

import categoryImg from '../../images/techCategory.png';


const CategoryHero = () => {
  return (
    <div className="category-hero-container"> 
        <div className='category-hero'>
            <div className='category-title'>
                <ul>
                    <li>Technology</li>
                    <li>Technology</li>
                    <li>Technology</li>
                </ul>
            </div>
            <div className='category-img'>
                <img src={categoryImg} alt='tech category'></img>
            </div>
            <div className='category-description'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p> 
            </div>
        </div>
    </div>
  );
};

export default CategoryHero;

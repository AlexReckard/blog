import React from 'react';
import './categoryHero.css';  

import categoryImgTech from '../../images/techCategory.png';
import categoryImgFood from '../../images/foodCategory.png';
import categoryImgTravel from '../../images/travelCategory.png';
import categoryImgDesign from '../../images/designCategory.png';
import categoryImgShopping from '../../images/shoppingCategory.png';

// Create an object to map categories to their verbose names
const categoryVerboseNames = {
  tech: "Technology",
  food: "Food",
  travel: "Travel",
  design: "Design",
  shopping: "Shopping",
};

// Create an object to map categories to their respective images
const categoryImages = {
  tech: categoryImgTech,
  food: categoryImgFood,
  travel: categoryImgTravel,
  design: categoryImgDesign,
  shopping: categoryImgShopping,
};

// Create an object to map categories to their respective descriptions
const categoryDescriptions = {
  tech: "Welcome to our Technology category page, the epicenter of all things tech on our blog. Here, we break down complex subjects like AI, blockchain, and quantum computing, and discuss the latest in gadgets and software. Below, you'll find our newest posts - in-depth, research-driven pieces designed to keep you updated and informed about the most recent developments and trends in the technology world.",
  food: "Welcome to our Food category page, the best place to find tasty recipes and insightful food reviews. We dive into the world of gastronomy, exploring the latest food trends and the best restaurants. Below, you'll find our newest posts - filled with tantalizing recipes, food experiences and reviews.",
  travel: "Welcome to our Travel category page, your gateway to discovering new locations and cultures. Here we share detailed guides, tips, and insights into various destinations. Below, you'll find our newest posts - informative, experience-driven pieces aiming to inspire your next journey.",
  design: "Welcome to our Design category page, the hub of creativity and innovation. We explore the latest trends in design, provide tips for budding designers, and showcase unique design work. Below, you'll find our newest posts - offering insightful critique, inspiration, and resources.",
  shopping: "Welcome to our Shopping category page, your ultimate guide to the best deals and product reviews. We compare, review, and list the best products in different categories. Below, you'll find our newest posts - helping you make the most informed shopping decisions.",
};


const CategoryHero = ({ category }) => {
  // Use the category prop to select the appropriate image and description
  const categoryImg = categoryImages[category];
  const categoryDescription = categoryDescriptions[category];
  const verboseName = categoryVerboseNames[category] || category;

  return (
    <div className="category-hero-container"> 
        <div className='category-hero'>
            <div className='category-title'>
                <ul>
                    <li>{verboseName}</li>
                    <li>{verboseName}</li>
                    <li>{verboseName}</li>
                </ul>
            </div>
            <div className='category-img'>
              <img src={categoryImg} alt={`${verboseName} category`}></img>
            </div>
            <div className='category-description'>
                <p>{categoryDescription}</p> 
            </div>
        </div>
    </div>
  );
};

export default CategoryHero;

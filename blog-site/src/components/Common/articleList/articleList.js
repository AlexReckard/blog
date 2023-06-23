import React, { useState } from 'react';
import ArticleCard from '../articleCard/articleCard.js';  
import LoadMoreButton from '../loadMoreButton/loadMoreButton.js';

import image1 from '../../../images/kaws.png';
import image2 from '../../../images/lv.png';
import image3 from '../../../images/ny.png';
import image4 from '../../../images/pizza.png';

// implementing dummy data to visualize the funtionality better
const ArticleList = () => {
  const allArticles = [
    {id: 1, category: "Design", title: "Worldwide KAWS: Permanent Installation Artworks", description: "We unveil the captivating sculptures of KAWS’ iconic artworks from around the world.", image: image1, alt: "kaws scultpure", readTime: "6", date: "03-19-23"},
    {id: 2, category: "Shopping", title: "Louis Vuitton: Essential Wardrobe Must-Haves ", description: "Unlock the epitome of style with Louis Vuitton's must-have wardrobe essentials.", image: image2, alt: "lv embroidery", readTime: "6", date: "03-10-23"},
    {id: 3, category: "Travel", title: "Captivating NYC: Unveiling 5 Instagram-Worthy Hotspots", description: "Unleash your inner photographer & discover  Instagram-worthy spots that NYC has to offer.", image: image3, alt: "dumbo: down under manhattan bridge overpass", readTime: "5", date: "03-7-23"},
    {id: 4, category: "Food", title: "Chicago: Unveiling the Finest Deep-Dish Pizza Delights", description: "Indulge in Chicago's unrivaled deep-dish pizza with our ultimate guide to the city's finest slices.", image: image4,  alt: "pizza restaurent neon sign", readTime: "9", date: "03-2-23"}
  ];


  const [articlesToShow, setArticlesToShow] = useState(allArticles.slice(0, 1)); // initial number of articles to show

  const loadMoreArticles = () => {
    setArticlesToShow(allArticles.slice(0, articlesToShow.length + 1)); // show 2 more articles
  };

  return (
    <div className='articles-container'>
    {articlesToShow.map(article => 
      <ArticleCard key={article.id} article={article} />
    )}
    <LoadMoreButton loadMore={loadMoreArticles} hasMore={articlesToShow.length < allArticles.length} />
  </div>
  );
};

export default ArticleList;

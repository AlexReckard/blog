import React from 'react';
import './articleHero.css';  

const ArticleHero = ({ article }) => {
  if (!article) {
    return <div></div>;
  }

  return (
    <div className="article-hero-container"> 
        <div className='article-hero'>
            <div className='article-img'>
              <figure>
                <img src={article.image.publicURL || ''} alt={article.alt || 'Hero Image'} />
                <figcaption>Photo By: {article.imageCredit || 'Caption'}</figcaption>
              </figure>
            </div>   
        </div>
    </div>
  );
};

export default ArticleHero;

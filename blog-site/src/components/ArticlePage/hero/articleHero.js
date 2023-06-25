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
                <img src={article.image || ''} alt={article.alt || 'Hero Image'} />
                <figcaption>{article.imageCredit || 'Caption'}</figcaption>
              </figure>
            </div>   
        </div>
    </div>
  );
};

export default ArticleHero;

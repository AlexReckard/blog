import React from 'react';
import { Link } from 'gatsby';
import './articleCard.css';  

const ArticleCard = ({ article }) => {
  if (!article) {
    return <div></div>;
  }

  // converting category to lower case and replacing spaces with hyphen
  const categorySlug = article.category.toLowerCase().replace(/ /g, "-");

  // remove leading slash from article slug
  const articleSlug = article.slug.startsWith("/") ? article.slug.slice(1) : article.slug;

  return (
    <div className="article-item">
      <div className="article-img">
        <Link to={`/category/${categorySlug}/${articleSlug}`}>
          <img src={article.image || ''} alt={article.alt} />
        </Link>
      </div>
      <div className="article-content">
        <Link to={`/category/${categorySlug}`} className='category-link'>
          <h4>{article.category}</h4>
        </Link>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <p className="read-article">
          <span>&rarr;</span>
          <Link to={`/category/${categorySlug}/${articleSlug}`}>Read Article</Link>
        </p>
        <p className="read-date">
          <span className="span-read">{article.readTime} min. read</span> 
          <span className="span-date">{article.date}</span>
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;

import React from 'react';
import { Link } from 'gatsby';
import './articleMeta.css';  

const ArticleMeta = ({ article }) => {
  if (!article) {
    return <div></div>;
  }

  // converting category to lower case and replacing spaces with hyphen
  const categorySlug = article.category.toLowerCase().replace(/ /g, "-");

  return (
    <div className="article-meta-container"> 
        <div className='article-meta'>
            <ul>
                <li>
                    <div className='article-category'><Link to={`/category/${categorySlug}`}>{article.category}</Link></div>
                </li>
                <li>
                    <div className='article-title'><h1>{article.title}</h1></div>
                </li>
                <li>
                    <div className='article-description'><p>{article.description}</p></div>
                </li>
                <li>
                    <div className='article-author'><p>Written by: <strong>{article.author}</strong></p></div>
                </li>
                <li>
                    <div className='article-date'><p>{article.date}</p></div>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default ArticleMeta;

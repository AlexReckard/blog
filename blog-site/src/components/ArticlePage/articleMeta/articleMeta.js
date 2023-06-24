import React from 'react';
import { Link } from 'gatsby';
import './articleMeta.css';  

const ArticleMeta = () => {
  return (
    <div className="article-meta-container"> 
        <div className='article-meta'>
            <ul>
                <li>
                    <div className='article-category'><Link to='/#'>Design</Link></div>
                </li>
                <li>
                    <div className='article-title'><h1>Worldwide KAWS: Permanent Installation Artworks</h1></div>
                </li>
                <li>
                    <div className='article-description'><p>We unveil the captivating sculptures of KAWS’ iconic artworks from around the world.</p></div>
                </li>
                <li>
                    <div className='article-author'><p>Written by: <strong>Alex Reckard</strong></p></div>
                </li>
                <li>
                    <div className='article-date'><p>03-2-23</p></div>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default ArticleMeta; 

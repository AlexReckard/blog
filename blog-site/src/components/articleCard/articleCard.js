import React from 'react';
import { Link } from 'gatsby';
import './articleCard.css';  

import articleCardImg from "../../images/kaws.png";


const ArticleCard = () => {
  return (
    <div className="articles-container">
        <div className="article-items">
            <div className="article-item">
                <div className="article-img">
                    <Link to="/#"><img src={articleCardImg} alt="Featured" /></Link>
                </div>
                <div className="article-content">
                    <Link to="/#" className='category-link'><h4>Tech</h4></Link>
                    <h3>AI: Boom or Gloom? Unveiling the Reality Behind the Hype</h3>
                    <p>Revelations: Artificial intelligence's intricate tapestry of boom and gloom.</p>
                    <p className="read-article"><span>&rarr;</span><Link to="/#">Read Article</Link></p>
                    <p className="read-date"><span className="span-read">7 min. read</span> <span className="span-date">03-21-23</span></p>
                </div>
            </div>
        </div> 
    </div>
  );
};

export default ArticleCard;













import React from 'react';

// this santization can help prevent xss attacks
import DOMPurify from 'dompurify';
import './articleContent.css';  

const ArticleContent = ({ html }) => {
  const sanitizedHTML = DOMPurify.sanitize(html);

  return (
    <div className="article-content-container"> 
        <article className='article' aria-label="article" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </div>
  );
};

export default ArticleContent; 

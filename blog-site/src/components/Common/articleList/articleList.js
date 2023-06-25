import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ArticleCard from '../articleCard/articleCard.js';  
import LoadMoreButton from '../loadMoreButton/loadMoreButton.js';

const ArticleList = ({ category, skip = 0 }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            date(formatString: "MM-DD-YY")
            category
            image {
              publicURL
            }
            alt
            imageCredit
            readTime
            description
            author
          }
          id
        }
      }
    }
  `);

  const allArticles = data.allMarkdownRemark.nodes
  .filter(node => category ? node.frontmatter.category === category : true)
  .map(node => ({
    id: node.id,
    category: node.frontmatter.category,
    title: node.frontmatter.title,
    description: node.frontmatter.description,
    image: node.frontmatter.image?.publicURL,
    alt: node.frontmatter.alt,
    imageCredit: node.frontmatter.imageCredit,
    readTime: node.frontmatter.readTime,
    date: node.frontmatter.date,
    author: node.frontmatter.author
  
  })).reverse();

const [articlesToShow, setArticlesToShow] = useState(allArticles.slice(skip, skip + 1)); //articles to show


const loadMoreArticles = () => {
  setArticlesToShow(allArticles.slice(skip, articlesToShow.length + skip + 1)); 
};


  return (
    <div className='articles-container'>
    {articlesToShow.map(article => 
      <ArticleCard key={article.id} article={article} />
    )}
    <LoadMoreButton loadMore={loadMoreArticles} hasMore={articlesToShow.length < (allArticles.length - skip)} />

  </div>
  );
};


export default ArticleList;

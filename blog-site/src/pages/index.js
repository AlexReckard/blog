import React from "react"

import Header from '../components/Common/header/header.js';
import Hero from '../components/HomePage/hero/hero.js';
import Marquee from "../components/HomePage/marquee/marquee.js";
import ArticleList from "../components/Common/articleList/articleList.js";
import Footer from '../components/Common/footer/footer.js';

import { graphql } from "gatsby";

function HomePage({ data }) {
  const articles = data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter).reverse();

  return (
    <div>
      <Header />
      <Hero articles={articles.slice(0, 3)} />
      <Marquee />
      <ArticleList skip={3} />
      <Footer />
    </div>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
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
  }
`;

export default HomePage;

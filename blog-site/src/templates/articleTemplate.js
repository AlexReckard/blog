import * as React from "react";
import { graphql } from 'gatsby';

import Header from '../components/Common/header/header.js';
import ArticleHero from "../components/ArticlePage/hero/articleHero.js";
import ArticleMeta from "../components/ArticlePage/articleMeta/articleMeta.js";
import ArticleContent from "../components/ArticlePage/articleContent/articleContent.js";
import Footer from '../components/Common/footer/footer.js';

function ArticlePage({ data }) {
  const post = data.markdownRemark;
//   const { title, date, category, image, alt, readTime, description, author, imageCredit } = post.frontmatter;
  const html = post.html;

  return (
    <div>
      <Header />
      <ArticleHero article={post.frontmatter} />
      <ArticleMeta article={post.frontmatter} />
      <ArticleContent html={html} />
      <Footer />
    </div>
  );
}

export default ArticlePage;

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            category
            image {
                publicURL
            }
            alt
            readTime
            description
            author
            imageCredit
        }
        }
    }
`



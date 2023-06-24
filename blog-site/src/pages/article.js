import * as React from "react"

import Header from '../components/Common/header/header.js';
import ArticleHero from "../components/ArticlePage/hero/articleHero.js";
import ArticleMeta from "../components/ArticlePage/articleMeta/articleMeta.js";
import ArticleContent from "../components/ArticlePage/articleContent/articleContent.js";


import Footer from '../components/Common/footer/footer.js';



function ArticlePage() {
  return (
    <div>
      <Header />
      <ArticleHero />
      <ArticleMeta />
      <ArticleContent />
      <Footer />
    </div>
  );
}

export default ArticlePage

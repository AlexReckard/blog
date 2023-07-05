import React from "react";

import Header from '../components/Common/header/header.js';
import CategoryHero from "../components/CategoryPage/categoryHero.js";
import ArticleList from "../components/Common/articleList/articleList.js";
import Footer from '../components/Common/footer/footer.js';

import Seo from "../components/Common/seo/seo.js";
import categoryMetadata from '../data/categoryMetadata.js';


function CategoryTemplate({ pageContext }) {
  const { category } = pageContext;
  const metadata = categoryMetadata[category];

  return (
    <div>
      <Seo 
        title={category}
        description={metadata.description}
        keywords={metadata.keywords}
      />
      <Header />
      <CategoryHero category={category} />
      <ArticleList category={category} />
      <Footer />
    </div>
  );
}

export default CategoryTemplate;

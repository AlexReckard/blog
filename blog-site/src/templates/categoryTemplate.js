import React from "react";

import Header from '../components/Common/header/header.js';
import CategoryHero from "../components/CategoryPage/categoryHero.js";
import ArticleList from "../components/Common/articleList/articleList.js";
import Footer from '../components/Common/footer/footer.js';


function CategoryTemplate({ pageContext }) {
  const { category } = pageContext;

  return (
    <div>
      <Header />
      <CategoryHero category={category} />
      <ArticleList category={category} />
      <Footer />
    </div>
  );
}

export default CategoryTemplate;

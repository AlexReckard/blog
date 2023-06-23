import * as React from "react"

import Header from '../components/Common/header/header.js';
import CategoryHero from "../components/CategoryPage/categoryHero.js";
import ArticleList from "../components/Common/articleList/articleList.js";
import Footer from '../components/Common/footer/footer.js';



function CategoryPage() {
  return (
    <div>
      <Header />
      <CategoryHero />
      <ArticleList />
      <Footer />
    </div>
  );
}

export default CategoryPage

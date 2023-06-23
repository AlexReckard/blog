import React from "react"

import Header from '../components/Common/header/header.js';
import Hero from '../components/HomePage/hero/hero.js';
import Marquee from "../components/HomePage/marquee/marquee.js";
import ArticleList from "../components/Common/articleList/articleList.js";
import Footer from '../components/Common/footer/footer.js';


function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Marquee />
      <ArticleList />
      <Footer />
    </div>
  );
}

export default HomePage

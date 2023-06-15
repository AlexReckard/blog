import React from "react"

import Header from '../components/header/header.js';
import Hero from '../components/hero/hero.js';
import Marquee from "../components/marquee/marquee.js";
import Footer from '../components/footer/footer.js';


function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Marquee />
      <Footer />
    </div>
  );
}

export default HomePage

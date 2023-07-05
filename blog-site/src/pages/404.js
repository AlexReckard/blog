import React from "react"
import { Link } from 'gatsby';
import Layout from "../components/Common/layout/layout";
import Seo from "../components/Common/seo/seo";

const NotFoundPage = () => {
    return (
        <Layout>
            <Seo 
            title="404: Not Found" 
            description="Oops! The page you're looking for doesn't exist. Check out Alex Reckard's blog for articles on technology, travel, food, and more."
            keywords={["404", "not found", "Alex Reckard", "blog", "technology", "travel", "food", "art", "shopping"]}
            />
            <h1>404: Not Found 😥</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <p>Return back to safety: <Link to="/">Home</Link></p>
        </Layout>
    )
}

export default NotFoundPage;

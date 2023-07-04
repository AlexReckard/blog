import React from 'react'
import Layout from '../components/Common/layout/layout'

const AboutPage = () => {
    return (
        <Layout>
        <h1>About</h1>
        <p>Hey there 🖐🏻, I'm <a href="https://alexreckard.com" className='alex-link'  target='_blank' rel='noopener noreferrer' aria-label="Alex Reckard's Site">Alex Reckard</a> and welcome to my blog! I'm a software engineer, but I didn't start out in tech. My journey's been a bit of a winding road.</p>

        <p>Back in college, I studied journalism and a bit of psychology. I was drawn to the storytelling, the research, the idea of informing people. But I soon found that much of the news was heavy on crime and other negative stuff, and I didn't really want to spend my life focusing on the darker side of things. So, I changed course.</p>

        <p>That's when I stumbled upon software engineering. Teaching myself to code was tough - a whole bunch of hours spent in front of screens, wading through resources, and a whole lot of debugging. But I found I loved it. Coding wasn't just a job, it was a challenge, a passion.</p>

        <p>Despite changing lanes to tech, I never stopped being a journalist at heart. The storytelling itch was still there. So, I thought, why not mix it up? Tech and stories. That's how this blog came to life.</p>

        <p>Here, I'm taking a lighter approach. I'm talking about what I love - code, yes, but also travel, food, and whatever else catches my interest. I want to focus on the stuff that makes life interesting, not just the hard news. My goal is to share something informative, something inspiring, and something worth your time.</p>

        <p>So that's me, and this is my blog. It's a coder's brain meets a journalist's heart, and I'm excited to have you along for the ride. Thanks for being here! ✌🏻</p>
         </Layout>
    )
}

export default AboutPage;
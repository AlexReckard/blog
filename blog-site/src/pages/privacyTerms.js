import React from 'react'
import Layout from '../components/Common/layout/layout'
import Seo from '../components/Common/seo/seo'

const PrivacyTermsPage = () => {
    return (
        <Layout>
            <Seo 
            title="Privacy and Terms" 
            description="Learn about the privacy policy and terms of service for Alex Reckard's Blog. Understand how we handle your data, respect your privacy, and the rules for using the site."
            keywords={["privacy policy", "terms of service", "Alex Reckard", "blog", "data", "privacy", "rules", "guidelines"]}
            />

            <h1>Privacy & Terms</h1>

            <h2>Privacy Policy</h2>
            <p>Your privacy is important to us at blog.alexreckard.com. This Privacy Policy outlines the types of personal information that is received and collected and how it is used. This Privacy Policy is reviewed and revised from time to time, so you may want to revisit it regularly.</p>

            <p>We are committed to maintaining the trust and confidence of all visitors to our blog. Specifically, we want you to know that blog.alexreckard.com is not in the business of selling, renting, or trading email lists with other companies and businesses for marketing purposes.</p>

            <h3>Cookies</h3>
            <p>As far as we know, our website doesn't use cookies directly. However, it's built with Gatsby, and while Gatsby itself doesn't use cookies, some Gatsby plugins may.</p>

            <h3>Log Files</h3>
            <p>blog.alexreckard.com does not use log files or tracking services like Google Analytics to collect information. We value your privacy and aim to create a secure environment for all our users.</p>

            <h3>Newsletter</h3>
            <p>If you choose to join our newsletter via Mailchimp, the email address that you submit to us will be forwarded to Mailchimp, who provide us with email marketing services. We won't store your email address in our own database or any of our internal computer systems. Your email address will remain within Mailchimp's database for as long as we continue to use Mailchimp's services for email marketing or until you specifically request removal from the list. You can unsubscribe from the newsletter at any time by clicking the "unsubscribe" link that is at the bottom of every email we send through Mailchimp, or by contacting us directly to request to be removed.</p>

            <h2>Terms of Use</h2>
            <p>The information provided on blog.alexreckard.com is for general information purposes only. While we strive to provide accurate and up-to-date information, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>

            <p>Under no circumstances shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>

            <p>This website may contain links to other websites and content belonging to or originating from third parties. We don't investigate, monitor, or check such external links for accuracy, adequacy, validity, reliability, availability, or completeness.</p>
            
            <p>If you have any questions or require more information about our Privacy Policy, feel free to contact us via email.</p>
        </Layout>

    )
}

export default PrivacyTermsPage;
import React, { useState } from 'react';
import faqs from '../data/faqs.json'; // Import the JSON file

const About = () => {
    const [faqOpen, setFaqOpen] = useState(null);

    return (
        <div id="about">
            <h2>About Ray Inc.</h2>
            <p>We at Ray Inc. are dedicated to crafting premium sunglasses that combine style with functionality. Our collection is designed to cater to various tastes and occasions, ensuring that you look sharp while protecting your eyes.</p>
            <p>From the timeless Classic Aviator to the vintage charm of Retro Round Sunglasses, our range includes something for everyone. Embrace elegance with our Chic Cat Eye Sunglasses or stay active with our Sporty Wrap Sunglasses. Our Trendy Square Sunglasses keep you up-to-date with the latest fashion, while our Elegant Oversized Sunglasses add a touch of glamour to any outfit.</p>
            <p>Shop with us and experience the perfect blend of fashion and protection!</p>
            <div className="faq-section">
                <h3>Frequently Asked Questions</h3>
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <h4 onClick={() => setFaqOpen(index)}>{faq.question}</h4>
                        {faqOpen === index && <p>{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;

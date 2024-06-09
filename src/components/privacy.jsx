import React from 'react';

const PrivacyPolicy = () => {
    const currentDate = new Date();

  return (
        <div id="privacy">
            <h1>Privacy Policy</h1>
            <p>At Ray Inc., we respect your privacy and are committed to protecting your personal information. This policy outlines our practices regarding the collection, use, and sharing of your information through our website.</p>

            <h2>Information Collection</h2>
            <p>We collect information that you provide to us when you register an account, place an order, or subscribe to our newsletter. This may include your name, email address, shipping address, and payment details.</p>

            <h2>Use of Information</h2>
            <p>Your information is used to process transactions, deliver products, and improve our services. We may also send you promotional emails about new products, special offers, or other information we think you may find interesting.</p>

            <h2>Sharing of Information</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>

            <h2>Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>

            <h2>Changes to Our Privacy Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page. This policy is effective as of {currentDate.getFullYear()}.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this privacy policy, please <a href="#contact">contact us</a> at info@rayinc.com.</p>
        </div>
    );
};

export default PrivacyPolicy;
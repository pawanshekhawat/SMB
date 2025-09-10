import React from 'react';

export const metadata = {
  title: 'Privacy Policy | SMB - Send Me Bro',
  description: 'Privacy Policy for SMB app that sends automated Instagram DMs.',
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1>Privacy Policy</h1>
      <p>Effective Date: September 10, 2025</p>

      <p>
        SMB (Send Me Bro) respects your privacy and is committed to protecting your personal data. 
        This Privacy Policy explains how we collect, use, and safeguard your information when you use our app.
      </p>

      <h2>Information We Collect</h2>
      <p>
        Our app may collect the following information when you interact with Instagram through our service:
      </p>
      <ul>
        <li>Instagram username and profile information of users who comment on your posts.</li>
        <li>Content of the comments on your posts to provide automated replies.</li>
        <li>Basic usage data to monitor and improve the app.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To send automated direct messages based on comments received.</li>
        <li>To manage and improve app functionality and performance.</li>
        <li>To comply with legal obligations and Meta Platform policies.</li>
      </ul>

      <h2>Sharing Your Information</h2>
      <p>
        SMB does not sell, trade, or rent users' personal data to third parties. Data may be shared with Meta (Facebook/Instagram) APIs only to provide the app’s functionality.
      </p>

      <h2>Data Security</h2>
      <p>
        We implement reasonable technical measures to protect your data. However, no system can be completely secure.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        SMB integrates with Instagram Graph API. By using our app, you consent to Instagram’s data practices as well.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this policy from time to time. We encourage you to review it periodically.
      </p>

      <h2>Contact Us</h2>
      <p>
        For questions about this Privacy Policy, contact us at: <a href="mailto:acexavier2402@gmail.com">acexavier2402@gmail.com</a>
      </p>
    </main>
  );
}

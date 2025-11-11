import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-slate-100">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-teal-500 text-white font-bold text-lg rounded-xl w-12 h-12 flex items-center justify-center shadow-md">
            IEBD
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-800">
              IEBD—Privacy&Policy
            </h1>
            <p className="text-sm text-slate-500">
              Last updated: November 11, 2025
            </p>
          </div>
        </div>

        {/* Intro */}
        <p className="text-slate-700 mb-5">
          At <strong>IEBD (Import-ExportBD)</strong>, your privacy is our top
          priority. This Privacy Policy describes how we collect, use, and
          protect your personal information when you use our website and
          services.
        </p>

        {/* Sections */}
        <Section title="1. Information We Collect">
          We collect information that helps us improve our services and provide
          you with a smooth experience. This includes:
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, and
              profile details (when you register or sign in).
            </li>
            <li>
              <strong>Product Data:</strong> Information about items you list,
              import, or export.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, and
              device information for analytics and security.
            </li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-disc ml-6 space-y-2">
            <li>To manage your account and provide access to IEBD features.</li>
            <li>To display and manage your product listings.</li>
            <li>To send important updates or notifications.</li>
            <li>To analyze usage and improve our services.</li>
            <li>To protect against fraud or unauthorized access.</li>
          </ul>
        </Section>

        <Section title="3. Data Protection & Security">
          We take strong security measures to protect your data from
          unauthorized access, alteration, or loss. All sensitive information is
          encrypted and stored securely using industry-standard practices.
          However, no method of transmission over the internet is 100% secure,
          so we encourage users to protect their own credentials.
        </Section>

        <Section title="4. Cookies">
          IEBD uses cookies to personalize your browsing experience, remember
          preferences, and analyze traffic. You can disable cookies through your
          browser settings, but some features may not function properly.
        </Section>

        <Section title="5. Third-Party Services">
          IEBD may use trusted third-party services such as:
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              <strong>Firebase Authentication</strong> – for secure login and
              user identity management.
            </li>
            <li>
              <strong>MongoDB Atlas</strong> – for cloud database hosting.
            </li>
          </ul>
          These providers follow their own privacy policies, and we recommend
          reviewing them as well.
        </Section>

        <Section title="6. Data Retention">
          We retain your information only as long as necessary to provide
          services, comply with legal obligations, or resolve disputes. You may
          request account deletion at any time, which will remove your personal
          data from our servers.
        </Section>

        <Section title="7. Children’s Privacy">
          IEBD is not intended for individuals under 13 years of age. We do not
          knowingly collect data from minors. If such information is discovered,
          we will promptly delete it.
        </Section>

        <Section title="8. Your Rights">
          As a user, you have the right to:
          <ul className="list-disc ml-6 space-y-2">
            <li>Access and review the information we hold about you.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>Withdraw consent for data processing.</li>
          </ul>
          To exercise these rights, contact us via email.
        </Section>

        <Section title="9. Updates to This Policy">
          We may update this Privacy Policy from time to time. Any major changes
          will be notified through our website. Continued use of IEBD indicates
          acceptance of the revised policy.
        </Section>

        <Section title="10. Contact Us">
          For questions, requests, or complaints about this Privacy Policy,
          contact us at:{" "}
          <a
            href="mailto:support@iebd.example"
            className="text-teal-600 underline"
          >
            support@iebd.example
          </a>
          .
        </Section>

        {/* Footer */}
        <div className="border-t border-slate-100 mt-8 pt-4 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} IEBD — All rights reserved.
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-6">
    <h2 className="text-lg font-semibold text-slate-800 mb-2">{title}</h2>
    <p className="text-slate-700">{children}</p>
  </section>
);

export default PrivacyPolicy;

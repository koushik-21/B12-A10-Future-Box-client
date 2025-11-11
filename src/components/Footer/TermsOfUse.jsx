import React from "react";

const TermsOfUse = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4">
      <title>IEBD-Terms&Conditions</title>
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-slate-100">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-teal-500 text-white font-bold text-lg rounded-xl w-12 h-12 flex items-center justify-center shadow-md">
            IEBD
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-800">
              IEBD — Terms of Use
            </h1>
            <p className="text-sm text-slate-500">
              Last updated: November 11, 2025
            </p>
          </div>
        </div>

        {/* Intro */}
        <p className="text-slate-700 mb-5">
          Welcome to <strong>IEBD (Import-ExportBD)</strong>. By using this
          website and our services, you agree to the following Terms of Use and
          our Privacy Policy. If you do not agree, please do not use IEBD.
        </p>

        {/* Sections */}
        <Section title="1. Services">
          IEBD is an online platform that allows users to browse, import, and
          export products globally. We offer product listings, import features,
          and user dashboards for managing export items.
        </Section>

        <Section title="2. Accounts & Authentication">
          To access private features such as <strong>Add Export</strong>,{" "}
          <strong>My Exports</strong>, <strong>My Imports</strong>, and{" "}
          <strong>Import Now</strong>, users must create an account. IEBD uses
          Firebase Authentication for login and Google sign-in. You are
          responsible for keeping your credentials secure.
        </Section>

        <Section title="3. User Data & Privacy">
          We store necessary data like profile, email, and product activity. Do
          not include sensitive personal information in your listings. Check our
          Privacy Policy for more information.
        </Section>

        <Section title="4. Product Listings & Accuracy">
          Product information (price, quantity, origin, images) may come from
          users or administrators. IEBD does not guarantee data accuracy.
          Importers must verify details before purchase.
        </Section>

        <Section title="5. Import Rules">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Users cannot import more than the available quantity of a product.
            </li>
            <li>
              The interface automatically prevents importing over the available
              limit.
            </li>
            <li>Once imported, the available quantity updates in real-time.</li>
          </ul>
        </Section>

        <Section title="6. Prohibited Conduct">
          <ul className="list-disc ml-6 space-y-2">
            <li>Do not upload harmful, illegal, or copyrighted content.</li>
            <li>Do not manipulate, hack, or misuse other users’ data.</li>
            <li>Do not use IEBD for fraudulent or unlawful activities.</li>
          </ul>
        </Section>

        <Section title="7. Intellectual Property">
          All content, including the IEBD logo, UI, and backend code, is owned
          by IEBD or its licensors. By submitting your products or images, you
          grant IEBD permission to display and use them within the platform.
        </Section>

        <Section title="8. Third-Party Links">
          IEBD may contain links to third-party websites. We are not responsible
          for their content, privacy, or terms.
        </Section>

        <Section title="9. Limitation of Liability">
          IEBD is not liable for damages, data loss, or business loss resulting
          from using the site. Use IEBD at your own discretion.
        </Section>

        <Section title="10. Modification & Termination">
          IEBD may change its features or these terms anytime. Continued use of
          the platform means you accept the updated terms.
        </Section>

        <Section title="11. Governing Law">
          These terms are governed by the laws of Bangladesh. Any disputes will
          be resolved amicably before legal action.
        </Section>

        <Section title="12. Contact">
          For questions, email us at{" "}
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

export default TermsOfUse;

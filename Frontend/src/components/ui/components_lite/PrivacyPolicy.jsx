import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 bg-white shadow-md rounded-2xl text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Effective date: April 27, 2024</p>

      <p className="mb-6">
        Welcome to <span className="font-semibold">HireSpark</span>. We value your privacy and are committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, disclose, and safeguard your information when you visit
        our job portal.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="mb-3">We may collect the following types of information:</p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          <strong>Personal Identification Information:</strong> Name, email
          address, phone number, and other contact details you provide when
          registering or applying for jobs.
        </li>
        <li>
          <strong>Job Application Information:</strong> Resume, cover letter,
          work experience, education, and other details related to your job
          applications.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about how you use our site,
          including IP address, browser type, pages visited, and time spent on
          pages.
        </li>
        <li>
          <strong>Cookies and Tracking Technologies:</strong> We use cookies to
          enhance your experience and collect usage data.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <p className="mb-3">We use your information to:</p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>Provide and maintain our job portal services.</li>
        <li>Process your job applications and communicate with you.</li>
        <li>Improve our website and user experience.</li>
        <li>
          Send you updates, newsletters, and promotional materials (with your
          consent).
        </li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Sharing Your Information</h2>
      <p className="mb-3">
        We do not sell your personal information. We may share your information
        with:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>Employers and recruiters to facilitate your job applications.</li>
        <li>
          Service providers who assist us in operating our website and services.
        </li>
        <li>Law enforcement or regulatory authorities if required by law.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Your Rights</h2>
      <p className="mb-3">You have the right to:</p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>Access and update your personal information.</li>
        <li>
          Request deletion of your personal data, subject to legal requirements.
        </li>
        <li>Opt-out of marketing communications.</li>
        <li>Withdraw consent where applicable.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Data Security</h2>
      <p className="mb-6">
        We implement reasonable security measures to protect your information
        from unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Children's Privacy</h2>
      <p className="mb-6">
        Our services are not directed to individuals under 13 years of age. We
        do not knowingly collect personal information from children under 13.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Changes to This Privacy Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">8. Contact Us</h2>
      <p className="mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
      <p className="font-medium">Email: <a href="mailto:support@hirespark.com" className="text-blue-600 hover:underline">support@hirespark.com</a></p>
      <p className="font-medium">Address: HireSpark, Jagamara, Bhubanswar,India</p>
    </div>
  );
};

export default PrivacyPolicy;

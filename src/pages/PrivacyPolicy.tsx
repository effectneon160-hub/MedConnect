import React from 'react';
export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 mb-8 pb-8 border-b border-slate-100">
            Last Updated: October 15, 2023
          </p>

          <div className="prose prose-slate max-w-none prose-headings:font-sans prose-headings:text-slate-900 prose-headings:tracking-tight prose-a:text-brand-600">
            <p className="lead text-lg text-slate-700 mb-6">
              MedConnect Health ("we," "our," or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our telemedicine services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4 text-slate-600">
              We collect information that you provide directly to us when you
              use our services, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, date of birth,
                email address, phone number, and physical address.
              </li>
              <li>
                <strong>Health Information:</strong> Medical history, current
                symptoms, medications, allergies, and other health-related data
                necessary for providing medical care.
              </li>
              <li>
                <strong>Payment Information:</strong> Credit card details and
                billing address (processed securely via our third-party payment
                processors).
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4 text-slate-600">
              We use the information we collect primarily to provide, maintain,
              and improve our telemedicine services. Specifically, we use your
              information to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>Facilitate medical consultations with licensed providers.</li>
              <li>Create and maintain your secure patient profile.</li>
              <li>Process payments for services rendered.</li>
              <li>
                Communicate with you regarding your treatment, appointments, or
                inquiries.
              </li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Security</h2>
            <p className="mb-6 text-slate-600">
              We implement a variety of security measures to maintain the safety
              of your personal information. All sensitive/credit information and
              health data you supply is encrypted via Secure Socket Layer (SSL)
              technology and stored in HIPAA-compliant databases. We restrict
              access to your personal information to employees, contractors, and
              agents who need to know that information in order to operate,
              develop, or improve our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              4. Sharing Your Information
            </h2>
            <p className="mb-6 text-slate-600">
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to outside parties except as necessary to
              provide our services (e.g., sending prescriptions to your chosen
              pharmacy) or when required by law.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-6 text-slate-600">
              If you have any questions about this Privacy Policy, please
              contact us at:
              <br />
              <br />
              <strong>MedConnect Health</strong>
              <br />
              123 Medical Plaza, Suite 200
              <br />
              Denver, CO 80202
              <br />
              Email: privacy@medconnect.com
              <br />
              Phone: +1 (303) 555-0192
            </p>
          </div>
        </div>
      </div>
    </div>);

}
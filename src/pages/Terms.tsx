import React from 'react';
export function Terms() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-slate-500 mb-8 pb-8 border-b border-slate-100">
            Last Updated: October 15, 2023
          </p>

          <div className="prose prose-slate max-w-none prose-headings:font-sans prose-headings:text-slate-900 prose-headings:tracking-tight">
            <p className="lead text-lg text-slate-700 mb-6">
              Please read these Terms and Conditions carefully before using the
              MedConnect Health platform. By accessing or using our services,
              you agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              1. Medical Emergency Disclaimer
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <p className="text-red-800 font-medium m-0">
                DO NOT USE THIS SERVICE FOR MEDICAL EMERGENCIES. If you are
                experiencing a medical emergency, call 911 immediately or go to
                the nearest emergency room.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              2. Nature of the Service
            </h2>
            <p className="mb-6 text-slate-600">
              MedConnect Health provides an online platform connecting patients
              with licensed medical providers for telehealth consultations. We
              treat specific, non-emergency conditions. The providers on our
              platform reserve the right to deny care if they determine your
              condition requires an in-person evaluation.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              3. No Guarantee of Prescription
            </h2>
            <p className="mb-6 text-slate-600">
              Completing an intake form and paying the consultation fee does not
              guarantee that a prescription will be written. Prescriptions are
              issued solely at the clinical discretion of the treating provider
              based on their medical judgment. We do not prescribe controlled
              substances (e.g., narcotics, stimulants) via this platform.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Payment Policy</h2>
            <p className="mb-6 text-slate-600">
              You agree to pay the consultation fee displayed at the time of
              your request. This fee covers the provider's time to review your
              case. If the provider determines they cannot treat you safely via
              telehealth, your fee may be refunded at our discretion. The fee
              does not cover the cost of any medications at the pharmacy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              5. User Responsibilities
            </h2>
            <p className="mb-4 text-slate-600">
              As a user of MedConnect Health, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>
                Provide accurate, current, and complete medical information.
              </li>
              <li>Not create multiple accounts or use false identities.</li>
              <li>
                Follow the treatment plan and instructions provided by the
                medical professional.
              </li>
              <li>
                Seek immediate emergency care if your symptoms worsen
                significantly.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="mb-6 text-slate-600">
              To the fullest extent permitted by law, MedConnect Health and its
              affiliated providers shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising
              out of or related to your use of the platform.
            </p>
          </div>
        </div>
      </div>
    </div>);

}
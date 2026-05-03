import React from 'react';
import { ShieldCheck } from 'lucide-react';
export function HIPAANotice() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-8 h-8 text-emerald-600" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Notice of Privacy Practices
            </h1>
          </div>
          <p className="text-slate-500 mb-8 pb-8 border-b border-slate-100">
            Effective Date: October 15, 2023
          </p>

          <div className="prose prose-slate max-w-none prose-headings:font-sans prose-headings:text-slate-900 prose-headings:tracking-tight">
            <p className="font-bold text-lg text-slate-800 mb-6 uppercase tracking-wide">
              THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE
              USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION.
              PLEASE REVIEW IT CAREFULLY.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Our Legal Duty</h2>
            <p className="mb-6 text-slate-600">
              We are required by applicable federal and state law to maintain
              the privacy of your health information. We are also required to
              give you this Notice about our privacy practices, our legal
              duties, and your rights concerning your health information. We
              must follow the privacy practices that are described in this
              Notice while it is in effect.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Uses and Disclosures of Health Information
            </h2>
            <p className="mb-4 text-slate-600">
              We use and disclose health information about you for treatment,
              payment, and healthcare operations. For example:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>
                <strong>Treatment:</strong> We may use or disclose your health
                information to a physician or other healthcare provider
                providing treatment to you. For example, sending a prescription
                to your pharmacy.
              </li>
              <li>
                <strong>Payment:</strong> We may use and disclose your health
                information to obtain payment for services we provide to you.
              </li>
              <li>
                <strong>Healthcare Operations:</strong> We may use and disclose
                your health information in connection with our healthcare
                operations, such as quality assessment and improvement
                activities.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Your Patient Rights
            </h2>
            <p className="mb-4 text-slate-600">
              You have the following rights regarding your health information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>
                <strong>Right to Inspect and Copy:</strong> You have the right
                to look at or get copies of your health information.
              </li>
              <li>
                <strong>Right to Amend:</strong> If you believe that your health
                information is incorrect or incomplete, you have the right to
                request that we amend it.
              </li>
              <li>
                <strong>Right to an Accounting of Disclosures:</strong> You have
                the right to receive a list of instances in which we or our
                business associates disclosed your health information for
                purposes other than treatment, payment, healthcare operations,
                and certain other activities.
              </li>
              <li>
                <strong>Right to Request Restrictions:</strong> You have the
                right to request that we place additional restrictions on our
                use or disclosure of your health information.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Questions and Complaints
            </h2>
            <p className="mb-6 text-slate-600">
              If you want more information about our privacy practices or have
              questions or concerns, please contact us. If you are concerned
              that we may have violated your privacy rights, you may complain to
              us using the contact information below. You also may submit a
              written complaint to the U.S. Department of Health and Human
              Services.
            </p>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
              <p className="font-bold text-slate-900 mb-2">
                Privacy Officer Contact
              </p>
              <p className="text-slate-600">
                MedConnect Health
                <br />
                Attn: HIPAA Privacy Officer
                <br />
                123 Medical Plaza, Suite 200
                <br />
                Denver, CO 80202
                <br />
                Email: compliance@medconnect.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>);

}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-28">

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
          Privacy Policy
        </h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-10" />

        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          Your privacy is important to us. This Privacy Policy explains what data NaraaCare
          (available at https://naraacare.com and as a mobile App) collects, why we collect it,
          how it is stored and protected, and your rights over it. We are committed to collecting
          only what is necessary and never selling your data.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed mb-10">
          This policy is publicly available at https://naraacare.com/privacy
        </p>

        {[
          {
            title: "1. Data We Collect",
            content: `1.1 Account Information
- Full name and email address provided at registration.
- Profile preferences and settings you configure within the App or at naraacare.com.

1.2 Health & Wellness Data
- Meal logs and nutritional information you enter. By enabling health tracking features, users explicitly consent to the collection and processing of the health information they voluntarily provide.
- Water intake records.
- Sleep data you log through the App.
- Health streaks, achievements, and report history.
- Avatar customisation choices (Star Plan).

1.3 Voice Data (Star Plan only)
If you use the AI Voice Assistant, your voice input is recorded and stored on our servers to process your meal log and deliver accurate responses. Voice data is retained for as long as necessary to provide the service and is never shared with third parties.

1.4 Device & Technical Information
- Device type, operating system, and app version.
- Crash logs and error reports to help improve the App.
- IP address and general region (no precise GPS location is collected).
- Website usage data when you visit naraacare.com (pages visited, session duration).`,
          },
          {
            title: "2. How We Use Your Data",
            content: `We use data we collect solely to:
- Provide, operate, and improve NaraaCare (App and naraacare.com).
- Personalise your experience — avatar layers, health reports, AI meal logging.
- Process Star Plan subscription payments through Razorpay.
- Send service communications — subscription renewals, policy updates, support replies.
- Diagnose technical issues and ensure App and website stability.
We do not use your data for advertising, third-party profiling, or any purpose not listed above.`,
          },
          {
            title: "3. User Consent & Data Sharing",
            content: `NaraaCare does not sell, rent, or share your personal or health data with any third party for commercial purposes. Your data belongs to you.
Data is shared within the App only where you explicitly choose to do so — for example, sharing your avatar with Care Circle members or sharing health data with a Care Circle connection. You are always in full control of what you share and with whom.

The only limited third-party access is:
- Razorpay — to process Star Plan payments. Razorpay operates under its own privacy policy and is RBI-compliant. NaraaCare does not store your full card or banking details.
- Cloud infrastructure providers — our servers are hosted on secure cloud infrastructure. Providers may have technical access to encrypted data solely for infrastructure operation.
- naraacare.com hosting provider — standard web hosting access to serve the website.
- Legal requirements — we may disclose data if required by Indian law, court order, or government authority.`,
          },
          {
            title: "4. Cookies & Website",
            content: `The website at https://naraacare.com may use cookies and similar technologies to:
- Remember your login session and preferences.
- Understand how visitors use the website (analytics).
You can control cookies through your browser settings. Disabling cookies may limit some website functionality. We do not use cookies for advertising.`,
          },
          {
            title: "5. Data Storage & Security",
            content: `Your data is stored on secure servers. We apply industry-standard security measures including encryption in transit (HTTPS/TLS) for the App and naraacare.com, and access controls to protect your information from unauthorised access, loss, or misuse.
While we take strong precautions, no electronic storage or transmission method is 100% secure. We encourage you to use a strong unique password and keep your credentials private.`,
          },
          {
            title: "6. Data Retention & Deletion",
            content: `We retain your data for as long as your account is active. If you delete your account:
- Your personal data and health logs are permanently deleted within 30 days of your request.
- Payment transaction records may be retained for up to 7 years as required by Indian financial regulations.
- Anonymised, non-identifiable aggregated data may be retained for product improvement.
To delete your account, use the in-app option or email info@naraacare.com. You can also submit a data deletion request at https://naraacare.com/delete.`,
          },
          {
            title: "7. Your Rights",
            content: `• Access — request a copy of the personal data we hold about you.
- Correction — update or correct inaccurate data in the App or by contacting us.
- Deletion — request deletion of your account and all associated data at any time.
- Withdrawal of consent — withdraw consent for specific uses (e.g. voice storage) via App settings or by contacting us. This does not affect lawfulness of prior processing.
- Data portability — request an export of your health data in a common format.
To exercise any right, contact us at info@naraacare.com. We will respond within 30 days.`,
          },
          {
            title: "8. Children's Privacy",
            content: `NaraaCare is not intended for children under 13. We do not knowingly collect data from children under 13. If you believe a child under 13 has created an account, contact us at info@naraacare.com and we will promptly delete the account and all associated data.
For users aged 13–17, we recommend parental or guardian involvement in account setup and use.`,
          },
          {
            title: "9. International Users",
            content: `NaraaCare is available globally via the App and at https://naraacare.com. If you access from outside India, your data may be transferred to and processed in India where our servers are located. By using NaraaCare you consent to this transfer. We ensure appropriate safeguards are in place regardless of processing location.`,
          },
          {
            title: "10. Changes to This Privacy Policy",
            content: `We may update this Privacy Policy to reflect changes in the App, website, or legal requirements. The latest version is always available at https://naraacare.com/privacy. We will notify you of material changes via the App or email. Continued use after the effective date constitutes acceptance.`,
          },
          {
            title: "11. Contact & Grievance",
            content: `• Website: https://naraacare.com
- Privacy Policy: https://naraacare.com/privacy
- Email: info@naraacare.com
- Company: Naraa Innovation | Nagpur, Maharashtra, India

We will acknowledge your query within 48 hours and aim to resolve it within 30 days. If you are not satisfied with our response, you may approach the relevant data protection authority in your jurisdiction.

© 2026 NaraaCare | https://naraacare.com | Effective: May 22, 2026

Grievance Officer
Name: Sahil Mahendra Pardake
Email: sahil.pardake@naraacare.com
Phone: +91 9209903425
Queries will be acknowledged within 48 hours, and we aim to resolve complaints within 30 days.
info@naraacare.com | Nagpur, Maharashtra, India | https://naraacare.com`,
          },
        ].map((section, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-base font-bold text-gray-900 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}

      </main>
      <Footer />
    </>
  );
}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-28">

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
          Terms of Service
        </h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-10" />

        {[
          {
            title: "1. Acceptance of Terms",
            content: `By creating an account or using NaraaCare (accessible at https://naraacare.com and via our mobile App), you confirm that you are at least 13 years of age and have the legal capacity to enter into this agreement. If you are under 18, you must have the consent of a parent or legal guardian. Users below 13 are strictly prohibited.
NaraaCare is developed and operated by Naraa Innovation, based in Nagpur, Maharashtra, India ("we", "us", "our"). By using the App or website you agree to these Terms of Service ("Terms"). If you do not agree, please uninstall the App and discontinue use immediately.`,
          },
          {
            title: "2. Description of Service",
            content: `NaraaCare is a personal health and wellness application available at https://naraacare.com and as a mobile App on Google Play and the Apple App Store. It helps users track meals, water intake, sleep, health streaks, and achievements through an interactive avatar system. Two plans are offered:
- Free Plan — Free forever. Includes 4 meal logs per day (text), monthly health reports, streak tracking, health achievements, avatar with Water & Food layers, and unlimited Care Circle members.
- Star Plan — Paid subscription at Rs. 99/month or Rs. 799/year (save 33%). Includes all Shine features plus 8 meal logs per day, AI voice assistant, 3 avatar layers (Water, Food & Sleep), outfit customisation shop, advanced health insights, daily to yearly reports, referral rewards, priority call support, and early focused support.`,
          },
          {
            title: "3. User Accounts",
            content: `You must register an account to use NaraaCare. You are responsible for:
- Providing accurate and complete information during registration.
- Keeping your login credentials confidential and secure.
- All activity that occurs under your account.
We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent, harmful, or abusive activity. You may delete your account at any time within the App or by contacting info@naraacare.com.`,
          },
          {
            title: "4. Subscription, Billing & Payments",
            content: `4.1 Star Plan Subscription
The Star Plan is a paid subscription processed securely through Razorpay. By subscribing you authorise us to charge the applicable fee to your selected payment method on the billing cycle you choose (monthly or yearly).

4.2 Auto-Renewal
Your Star Plan subscription automatically renews at the end of each billing period unless you cancel before the renewal date. You will be charged the same rate unless we notify you of a price change in advance via the App or at https://naraacare.com.

4.3 Cancellation
You may cancel your subscription at any time from within the App or by emailing info@naraacare.com. Upon cancellation, you retain Star Plan access until the end of your current paid billing period. No partial refunds are issued for unused time.

4.4 Refund Policy
All payments are non-refundable except where a verifiable technical fault on our part prevented you from accessing the service. Refund requests on technical grounds must be submitted within 7 days of the incident to info@naraacare.com with a description and any supporting evidence. We assess each request individually and reserve the right to decline requests that do not meet this criterion.`,
          },
          {
            title: "5. Acceptable Use",
            content: `You agree not to:
- Use the App or website for any unlawful purpose or in violation of applicable Indian or international law.
- Reverse-engineer, decompile, hack, or create derivative works of the App.
- Upload or transmit malicious code, viruses, or harmful content.
- Harass, abuse, or harm other users through the Care Circle or any social feature.
- Misrepresent your identity or impersonate any person or entity.
- Scrape, crawl, or use automated tools to access the App without permission.
- Use the App in any way that could damage, disable, or impair the App, its servers, or naraacare.com.`,
          },
          {
            title: "6. Intellectual Property",
            content: `All content, design, graphics, code, avatars, features, trademarks, and the domain naraacare.com are the exclusive property of Naraa Innovation. You are granted a limited, non-exclusive, non-transferable, revocable licence to use the App and website solely for personal, non-commercial purposes. Nothing in these Terms transfers any intellectual property rights to you.`,
          },
          {
            title: "7. Health Disclaimer",
            content: `NaraaCare is a wellness tracking tool and is not a medical device, clinical diagnosis tool, or substitute for professional medical advice. Information provided through the App and at https://naraacare.com — including health insights, reports, and AI meal logging — is for informational and self-tracking purposes only. Always consult a qualified healthcare professional before making decisions about your health, diet, or fitness. We are not liable for any health outcomes arising from use of the App or reliance on content at https://naraacare.com. AI-generated insights or recommendations may contain errors and should not be considered medical advice.`,
          },
          {
            title: "8. Care Circle & Social Features",
            content: `NaraaCare allows users to connect with others through Care Circle. You are responsible for the conduct of connections you invite. We do not monitor Care Circle communications but reserve the right to remove content or suspend users that violate these Terms or community standards.`,
          },
          {
            title: "9. Website — naraacare.com",
            content: `The website at https://naraacare.com is part of the NaraaCare service. All Terms applicable to the App apply equally to your use of the website. We reserve the right to update, modify, or take down any content or page on https://naraacare.com at any time without notice.`,
          },
          {
            title: "10. Availability & Modifications",
            content: `We strive to keep NaraaCare (App and website) available at all times but do not guarantee uninterrupted access. We may update, modify, suspend, or discontinue any feature or page at any time. We will endeavour to provide reasonable advance notice of significant changes at https://naraacare.com. Continued use after changes constitutes acceptance of the updated Terms.`,
          },
          {
            title: "11. Limitation of Liability",
            content: `To the maximum extent permitted by applicable law, NaraaCare and Naraa Innovation shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the App or https://naraacare.com. Our total liability to you for any claim shall not exceed the amount you paid to us in the 3 months preceding the claim.`,
          },
          {
            title: "12. Governing Law & Dispute Resolution",
            content: `These Terms are governed by the laws of India. Any disputes shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be subject to the exclusive jurisdiction of the courts of Nagpur, Maharashtra, India.`,
          },
          {
            title: "13. Changes to Terms",
            content: `We may update these Terms from time to time. The latest version will always be available at https://naraacare.com/terms. We will notify you of material changes through the App or by email. Your continued use after the effective date of revised Terms constitutes acceptance.`,
          },
          {
            title: "14. Contact",
            content: `• Website: https://naraacare.com
- Email: info@naraacare.com
- Company: Naraa Innovation | Nagpur, Maharashtra, India`,
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
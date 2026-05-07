import Link from 'next/link';

const CONTACT_EMAIL = 'arabiyaapp@gmail.com';

const sections = [
  {
    title: 'Information Collection and Use',
    body: (
      <>
        <p>The Application does not directly collect personal information. The Service Provider does not have access to your name, email address, or precise device identifiers unless you contact us directly.</p>
        <p>Certain third-party services used by the Application (listed below) may collect limited technical data such as device type and app version to deliver their services. The Application does not gather precise information about the location of your mobile device.</p>
      </>
    ),
  },
  {
    title: 'Purchases',
    body: (
      <p>In-app purchases are handled entirely by Apple&apos;s App Store. The Service Provider does not store your payment information. Purchase records are managed through Apple&apos;s StoreKit and RevenueCat solely to verify your entitlements within the Application.</p>
    ),
  },
  {
    title: 'Third Party Services',
    body: (
      <>
        <p>The Application uses the following third-party services, each with their own privacy policy:</p>
        <ul>
          <li><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#9A7A52' }}>RevenueCat</a> — manages in-app purchase verification and entitlements. May collect anonymous device identifiers and purchase history.</li>
          <li><a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#9A7A52' }}>Expo</a> — used to deliver over-the-air app updates. May collect device type and app version to deliver updates correctly.</li>
        </ul>
        <p>The Service Provider may disclose information:</p>
        <ul>
          <li>as required by law, such as to comply with a subpoena or similar legal process;</li>
          <li>when necessary in good faith to protect rights, safety, or respond to a government request.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Opt-Out Rights',
    body: (
      <p>You can stop all collection of information by the Application by uninstalling it. You may use the standard uninstall processes available as part of your mobile device or via the mobile application marketplace.</p>
    ),
  },
  {
    title: 'Data Retention Policy',
    body: (
      <p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you would like your data deleted, please contact the Service Provider at <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#9A7A52' }}>{CONTACT_EMAIL}</a> and they will respond in a reasonable time.</p>
    ),
  },
  {
    title: 'Children',
    body: (
      <>
        <p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.</p>
        <p>The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. If the Service Provider discovers that a child under 13 has provided personal information, it will be immediately deleted from their servers. If you are a parent or guardian and you are aware that your child has provided personal information, please contact the Service Provider at <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#9A7A52' }}>{CONTACT_EMAIL}</a>.</p>
      </>
    ),
  },
  {
    title: 'Security',
    body: (
      <p>The Service Provider is concerned about safeguarding the confidentiality of your information and provides physical, electronic, and procedural safeguards to protect the information it processes and maintains.</p>
    ),
  },
  {
    title: 'Changes',
    body: (
      <p>This Privacy Policy may be updated from time to time. The Service Provider will notify you of any changes by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use of the Application is deemed approval of all changes.</p>
    ),
  },
  {
    title: 'Your Consent',
    body: (
      <p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.</p>
    ),
  },
  {
    title: 'Contact Us',
    body: (
      <p>If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact the Service Provider via email at <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#9A7A52' }}>{CONTACT_EMAIL}</a>.</p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: '#FAFAF8', minHeight: '100vh' }}>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        padding: '24px 40px',
        borderBottom: '1px solid #E8E0D5',
      }}>
        <Link href="/" style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 600,
          fontSize: 18,
          color: '#1C1410',
          textDecoration: 'none',
        }}>
          Sakina Cards
        </Link>
      </nav>

      <main style={{
        maxWidth: 700,
        margin: '0 auto',
        padding: '64px 24px 80px',
      }}>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 700,
          fontSize: 44,
          color: '#1C1410',
          marginBottom: 8,
        }}>
          Privacy Policy
        </h1>
        <p style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 15,
          color: '#C4B5A8',
          marginBottom: 56,
        }}>
          Effective as of: January 1, 2025
        </p>

        <p style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 17,
          color: '#6B5E54',
          lineHeight: 1.7,
          marginBottom: 48,
        }}>
          This privacy policy applies to the Sakina Cards app (hereby referred to as &quot;Application&quot;) for mobile devices, created by Sakina Cards (hereby referred to as &quot;Service Provider&quot;) as a paid service. This service is intended for use &quot;AS IS&quot;.
        </p>

        {sections.map((section) => (
          <section key={section.title} style={{ marginBottom: 44 }}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 600,
              fontSize: 24,
              color: '#1C1410',
              marginBottom: 14,
            }}>
              {section.title}
            </h2>
            <div style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 17,
              color: '#6B5E54',
              lineHeight: 1.75,
            }}>
              {section.body}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

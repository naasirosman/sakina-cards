import Image from 'next/image';
import Link from 'next/link';

const APP_STORE_URL = 'https://apps.apple.com/app/id6759875947';

const FEATURES = [
  {
    emoji: '🌿',
    title: 'Getting to Know',
    description: 'Thoughtful questions for the blessed process of getting to know a potential spouse with intention and sincerity.',
  },
  {
    emoji: '🍂',
    title: 'Friends & Family',
    description: 'Warm, meaningful questions to deepen the bonds that matter most — with those closest to your heart.',
  },
  {
    emoji: '🔓',
    title: 'Three Levels of Depth',
    description: 'Start gently with Close questions, then go deeper with Closer and Closest as trust and comfort grows.',
  },
  {
    emoji: '✨',
    title: 'One-time Purchase',
    description: 'No subscriptions. Unlock the full experience once and keep it forever.',
  },
];

export default function Home() {
  return (
    <div style={{ backgroundColor: '#FAFAF8', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Nav */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 40px',
        borderBottom: '1px solid #E8E0D5',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image src="/logo.png" alt="Sakina Cards" width={32} height={32} style={{ borderRadius: 8 }} />
          <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 600, fontSize: 18, color: '#1C1410' }}>
            Sakina Cards
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '80px 24px 64px',
        maxWidth: 640,
        margin: '0 auto',
        width: '100%',
      }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 600,
          fontSize: 15,
          letterSpacing: '2.5px',
          color: '#9A7A52',
          textTransform: 'uppercase',
          marginBottom: 4,
        }}>
          Sakina Cards
        </p>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: 'clamp(42px, 8vw, 64px)',
          color: '#1C1410',
          lineHeight: 1.1,
          letterSpacing: '-0.5px',
          marginBottom: 20,
        }}>
          Deeper questions<br />for deeper connections
        </h1>
        <p style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontStyle: 'italic',
          fontSize: 20,
          color: '#9E8E80',
          marginBottom: 40,
          lineHeight: 1.5,
        }}>
          Thoughtful conversation cards for Muslim couples,<br />families, and friends.
        </p>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            style={{ height: 52 }}
          />
        </a>
      </section>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: '#E8E0D5', maxWidth: 560, margin: '0 auto', width: '100%' }} />

      {/* Features */}
      <section style={{
        padding: '64px 24px',
        maxWidth: 800,
        margin: '0 auto',
        width: '100%',
      }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 600,
          fontSize: 11,
          letterSpacing: '2.5px',
          color: '#9A7A52',
          textTransform: 'uppercase',
          textAlign: 'center',
          marginBottom: 48,
        }}>
          Features
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 16,
        }}>
          {FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                backgroundColor: '#F4F0EA',
                borderRadius: 16,
                border: '1px solid #E8E0D5',
                padding: '28px 24px',
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{f.emoji}</div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 600,
                fontSize: 20,
                color: '#1C1410',
                marginBottom: 8,
              }}>
                {f.title}
              </h3>
              <p style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 16,
                color: '#9E8E80',
                lineHeight: 1.6,
              }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        backgroundColor: '#F4F0EA',
        borderTop: '1px solid #E8E0D5',
        borderBottom: '1px solid #E8E0D5',
        padding: '64px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: 'clamp(32px, 6vw, 48px)',
          color: '#1C1410',
          marginBottom: 16,
          letterSpacing: '-0.3px',
        }}>
          Start a real conversation
        </h2>
        <p style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontStyle: 'italic',
          fontSize: 18,
          color: '#9E8E80',
          marginBottom: 32,
        }}>
          Available now on iPhone.
        </p>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            style={{ height: 52 }}
          />
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '32px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 13,
          color: '#C4B5A8',
        }}>
          © {new Date().getFullYear()} Sakina Cards
        </p>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link href="/privacy-policy" style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 13,
            color: '#C4B5A8',
            textDecoration: 'none',
          }}>
            Privacy Policy
          </Link>
          <a href="mailto:arabiyaapp@gmail.com" style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 13,
            color: '#C4B5A8',
            textDecoration: 'none',
          }}>
            Contact
          </a>
        </div>
      </footer>

    </div>
  );
}

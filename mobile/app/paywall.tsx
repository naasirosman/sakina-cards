import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Purchases, { PurchasesPackage } from 'react-native-purchases';
import { Colors, Fonts, Radius, Spacing } from '../constants/theme';

const ENTITLEMENT_ID = 'Full Sakina Pack';

const FEATURES = [
  { emoji: '🔓', label: 'All levels unlocked', sub: 'Access Closer & Closest questions' },
  { emoji: '🃏', label: 'Every deck included', sub: 'All current & future decks' },
  { emoji: '✨', label: 'One-time purchase', sub: 'No subscription, yours forever' },
];

export default function PaywallScreen() {
  const [pkg, setPkg] = useState<PurchasesPackage | null>(null);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState(false);
  const [restoring, setRestoring] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const goBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/');
  };

  useEffect(() => {
    if (__DEV__) { goBack(); return; }

    Purchases.getOfferings()
      .then(offerings => setPkg(offerings.current?.availablePackages[0] ?? null))
      .catch((e: any) => setError(JSON.stringify({ code: e?.code, msg: e?.message, rc: e?.readableErrorCode, underlying: e?.underlyingErrorMessage })))
      .finally(() => setLoading(false));
  }, []);

  async function handlePurchase() {
    if (!pkg) return;
    setPurchasing(true);
    setError(null);
    try {
      await Purchases.purchasePackage(pkg);
      router.replace('/');
    } catch (e: any) {
      if (!e.userCancelled) setError('Purchase failed. Please try again.');
    } finally {
      setPurchasing(false);
    }
  }

  async function handleRestore() {
    setRestoring(true);
    setError(null);
    try {
      const info = await Purchases.restorePurchases();
      if (info.entitlements.active[ENTITLEMENT_ID]) {
        router.replace('/');
      } else {
        setError('No previous purchase found.');
      }
    } catch {
      setError('Restore failed. Please try again.');
    } finally {
      setRestoring(false);
    }
  }

  const busy = purchasing || restoring;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar style="dark" />

      <TouchableOpacity style={styles.closeBtn} onPress={goBack} hitSlop={12}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.eyebrow}>Sakina Cards</Text>
        <Text style={styles.headline}>Unlock the{'\n'}full journey</Text>
        <Text style={styles.tagline}>Deeper questions for deeper connections</Text>

        <View style={styles.features}>
          {FEATURES.map(f => (
            <View key={f.label} style={styles.featureRow}>
              <Text style={styles.featureEmoji}>{f.emoji}</Text>
              <View style={styles.featureText}>
                <Text style={styles.featureLabel}>{f.label}</Text>
                <Text style={styles.featureSub}>{f.sub}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.priceCard}>
          {loading ? (
            <ActivityIndicator color={Colors.gold} />
          ) : pkg ? (
            <>
              <Text style={styles.priceLabel}>One-time purchase</Text>
              <Text style={styles.price}>{pkg.product.priceString}</Text>
            </>
          ) : (
            <Text style={styles.errorText}>{error}</Text>
          )}
        </View>

        <TouchableOpacity
          style={[styles.cta, (!pkg || busy) && styles.ctaDisabled]}
          onPress={handlePurchase}
          disabled={!pkg || busy}
          activeOpacity={0.85}
        >
          {purchasing ? (
            <ActivityIndicator color={Colors.white} />
          ) : (
            <Text style={styles.ctaText}>Get Premium</Text>
          )}
        </TouchableOpacity>

        {error && !loading && (
          <Text style={styles.errorText}>{error}</Text>
        )}

        <TouchableOpacity onPress={handleRestore} disabled={busy} style={styles.restoreBtn}>
          <Text style={styles.restoreText}>
            {restoring ? 'Restoring…' : 'Restore Purchases'}
          </Text>
        </TouchableOpacity>

        <View style={styles.legal}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.apple.com/legal/internet-services/itunes/dev/stdeula/')}>
            <Text style={styles.legalText}>Terms</Text>
          </TouchableOpacity>
          <Text style={styles.legalSep}>·</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://sakinah-cards.vercel.app/privacy-policy')}>
            <Text style={styles.legalText}>Privacy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  closeBtn: {
    position: 'absolute',
    top: 56,
    right: Spacing.lg,
    zIndex: 10,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    fontSize: 16,
    color: Colors.textMuted,
  },
  content: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xxl + Spacing.lg,
    paddingBottom: Spacing.xxl,
    alignItems: 'center',
  },
  eyebrow: {
    fontFamily: Fonts.semiBold,
    fontSize: 11,
    letterSpacing: 2.5,
    color: Colors.gold,
    textTransform: 'uppercase',
    marginBottom: Spacing.sm,
  },
  headline: {
    fontFamily: Fonts.boldItalic,
    fontSize: 44,
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 50,
    letterSpacing: -0.5,
    marginBottom: Spacing.sm,
  },
  tagline: {
    fontFamily: Fonts.italic,
    fontSize: 17,
    color: Colors.textMuted,
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  features: {
    width: '100%',
    backgroundColor: Colors.surface,
    borderRadius: Radius.md,
    padding: Spacing.md,
    gap: Spacing.md,
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  featureEmoji: {
    fontSize: 22,
    width: 32,
    textAlign: 'center',
  },
  featureText: {
    flex: 1,
  },
  featureLabel: {
    fontFamily: Fonts.semiBold,
    fontSize: 15,
    color: Colors.text,
  },
  featureSub: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: Colors.textMuted,
    marginTop: 1,
  },
  priceCard: {
    width: '100%',
    backgroundColor: Colors.surfaceCard,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: Spacing.lg,
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  priceLabel: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: Colors.textMuted,
    marginBottom: 4,
  },
  price: {
    fontFamily: Fonts.bold,
    fontSize: 36,
    color: Colors.text,
    letterSpacing: -0.5,
  },
  cta: {
    width: '100%',
    backgroundColor: Colors.gold,
    borderRadius: Radius.full,
    paddingVertical: 17,
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  ctaDisabled: {
    opacity: 0.45,
  },
  ctaText: {
    fontFamily: Fonts.semiBold,
    fontSize: 17,
    color: Colors.white,
    letterSpacing: 0.3,
  },
  errorText: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: '#B94040',
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  restoreBtn: {
    paddingVertical: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  restoreText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.textMuted,
  },
  legal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  legalText: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.textLight,
  },
  legalSep: {
    fontSize: 12,
    color: Colors.textLight,
  },
});

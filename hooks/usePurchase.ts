import { useCallback, useEffect, useState } from 'react';
import Purchases, { CustomerInfo } from 'react-native-purchases';
import { Level } from '../constants/decks';

const ENTITLEMENT_ID = 'Full Sakina Pack';

export function usePurchase() {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [isLoading, setIsLoading] = useState(!__DEV__);

  const isPurchased = !!customerInfo?.entitlements.active[ENTITLEMENT_ID];

  useEffect(() => {
    if (__DEV__) return;

    Purchases.invalidateCustomerInfoCache();
    Purchases.getCustomerInfo()
      .then(setCustomerInfo)
      .catch(() => {})
      .finally(() => setIsLoading(false));

    const listener: any = Purchases.addCustomerInfoUpdateListener((info) => {
      setCustomerInfo(info);
    });

    return () => {
      listener?.remove();
    };
  }, []);

  const restorePurchase = useCallback(async (): Promise<boolean> => {
    try {
      const info = await Purchases.restorePurchases();
      setCustomerInfo(info);
      return !!info.entitlements.active[ENTITLEMENT_ID];
    } catch {
      return false;
    }
  }, []);

  const isLevelLocked = useCallback(
    (level: Level) => {
      if (isPurchased) return false;
      return level === 'closer' || level === 'closest';
    },
    [isPurchased]
  );

  return { isPurchased, isLoading, customerInfo, restorePurchase, isLevelLocked };
}

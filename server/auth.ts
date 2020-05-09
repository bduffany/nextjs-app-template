import * as admin from 'firebase-admin';
import firebase from 'firebase/app';

export type HasClaims = firebase.auth.IdTokenResult | admin.auth.UserRecord;

const getClaims = (user: HasClaims): Record<string, any> => {
  if (!user) return {};
  return user.customClaims || user.claims;
};

type AuthProvider = 'facebook.com';

export const getProviderData = (provider: AuthProvider, user: any) => {
  return (user?.providerData || []).filter(
    (data: any) => data.providerId === provider
  )[0];
};

const APP_CLAIMS_ALLOW_LIST = [
  { role: 'admin' },
  { tier: 'small' },
  { tier: 'medium' },
  { tier: 'large' },
];

export const hasClaims = (user: HasClaims, claims: Record<string, any>) => {
  const userClaims = getClaims(user);
  if (!userClaims) return false;

  for (const [key, value] of Object.entries(claims)) {
    if (userClaims[key] !== value) return false;
  }
  return true;
};

export const canAccessApp = (user: HasClaims): boolean => {
  return APP_CLAIMS_ALLOW_LIST.some((allowed) => hasClaims(user, allowed));
};

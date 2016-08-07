import {
  AuthMethods,
  defaultFirebase,
  FIREBASE_PROVIDERS,
  firebaseAuthConfig
} from 'angularfire2';


export const FIREBASE_APP_PROVIDERS: any[] = [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: 'AIzaSyBEfCeCg9RJtibHNnQ1ilNWHHSpmQglIaE',
    authDomain: 'mileage-tracker-1aad1.firebaseapp.com',
    databaseURL: 'https://mileage-tracker-1aad1.firebaseio.com',
    storageBucket: 'mileage-tracker-1aad1.appspot.com'
  }),
  firebaseAuthConfig({
    method: AuthMethods.Popup,
    remember: 'default'
  })
];

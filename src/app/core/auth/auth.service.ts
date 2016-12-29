import { Injectable } from '@angular/core';
import { AngularFire, AngularFireAuth, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {
  auth: AngularFireAuth = null;

  private authState: FirebaseAuthState = null;
  

  constructor(private af: AngularFire) {
    this.auth = this.af.auth;
    this.auth.subscribe(auth => {
      this.authState = auth;
    });
  }

  get userImage(): string {
    let path: string;
    this.auth.subscribe((data) => {
      if (data) {
        path = data.auth.photoURL;
      }
    });
    return path;
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signIn(provider: number): firebase.Promise<FirebaseAuthState> {
    return this.auth.login({ provider: provider, method: AuthMethods.Popup })
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signInWithGithub(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Github);
  }

  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Google);
  }

  signInWithTwitter(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Twitter);
  }

  signOut(): void {
    this.auth.logout();
  }
}

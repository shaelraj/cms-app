import { Observable } from 'rxjs-compat';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import firebase = require('firebase');

@Injectable()
export class AfService {
  user$: Observable<User>;

  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    })
  }

  loginWithGogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then((credentials) => {
      this.updateUser(credentials.user);
    });
  }

  updateUser(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid : user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        subscriber: true,
        admin: false
      }
    };
    return userRef.set(Object.assign({}, data), {merge: true});
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}

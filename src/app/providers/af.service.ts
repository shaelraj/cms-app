
import {of as observableOf, Observable} from 'rxjs';

import {switchMap} from 'rxjs/operators'
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Injectable()
export class AfService {
  user$: Observable<User>;

  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return observableOf(null);
      }
    }))
  }

  loginWithGogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then((credentials) => {
      this.updateUser(credentials.user, false);
    });
  }

  loginWithGogleAdmin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then((credentials) => {
      this.updateUser(credentials.user, true);
    });
  }

  updateUser(user, adminFlag) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid : user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        subscriber: true,
        admin: adminFlag
      }
    };
    return userRef.set(Object.assign({}, data), {merge: true});
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}

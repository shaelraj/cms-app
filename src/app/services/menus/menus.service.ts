import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface Menu {
  title: string;
  url: string;
}

@Injectable()
export class MenusService {

  constructor(private afs: AngularFirestore) { }

  getMenus() {
    // return this.afs.collection('menus').snapshotChanges().pipe(
    //   map(menu => {
    //     return menu.map((a) => {
    //       const data = a.payload.doc.data() as Menu;
    //       const id = a.payload.doc.id;
    //       return { id, ...data };
    //     })
    //   })
    // );

    return this.afs.collection('menus').valueChanges();
  }

  addMenu(menu: Menu) {
    this.afs.collection('menus').add(menu)
  }

  deleteMenu(menuId) {
    this.afs.doc('menus/' + menuId).delete();
  }

  updateMenu(menuId, menu: Menu) {
    this.afs.doc('menus/' + menuId).update(menu);
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';


@Component({
  selector: 'pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.less']
})
export class PagesListComponent implements OnInit {

  pagesObservale: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.pagesObservale = this.getPages('/pages');
  }

  getPages(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}

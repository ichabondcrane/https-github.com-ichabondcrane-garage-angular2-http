
import { Component, ViewChild} from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import { MatPaginator } from '@angular/material';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  myData: Array <any> ;
  displayedColumns = ['ID', 'STATUS', 'DESCRIPTION'];
  dataSource: MyDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: Http) {
    this.getData();
  }

  
 public getData() {
  let url = '/api/posts/db2.service/selectdata';
  this.http.get(url)
    .map(response => response.json())
    .subscribe(res => {
      this.myData = res;
      this.dataSource = new MyDataSource(this.myData, this.paginator);
      this.myData.length = res.length;
    });
    
}
}


export class MyDataSource extends DataSource<any> {
  constructor(private dataBase: Post[],  private paginator: MatPaginator) {
    super();
  }

  connect(): Observable<Post[]> {
    const displayDataChanges = [
      this.dataBase,
      this.paginator.page,
    ];

  
    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.dataBase.slice();
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      const finalData = data.splice(startIndex, this.paginator.pageSize);
    
      return finalData;
  
    });
  }

  disconnect() {}

  }

// eol: cloud be placed on a model folder
  export class Post {
    constructor (
        public ID: String,
        public STATUS: String,
        public DESCRIPTION: String
    ) { }
}
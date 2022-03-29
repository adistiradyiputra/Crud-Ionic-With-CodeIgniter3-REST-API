import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public getMahasiswa: any;
  public deleteMahasiswa: any;

  constructor(
    private http: HttpClient
  ) { }


  ionViewWillEnter() {
    this._Getdata();
  }

  
  _Getdata() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/CodeIgniter_API/index.php/api/GetData');
    data.subscribe(result => {
      console.log(result);
      this.getMahasiswa = result;
    });
  }

  deleteData(npm) {
    let data: Observable<any>;
    data = this.http.get(
      'http://localhost/CodeIgniter_API/index.php/api/DeleteData/' + npm
    );
    data.subscribe((result) => {
      this.deleteMahasiswa = result;
      console.log(result.status);
      if (result.status === 'Ok') {
        alert('Delete Data Successfully!');
        this.ionViewWillEnter();
      }
    });
  }
}





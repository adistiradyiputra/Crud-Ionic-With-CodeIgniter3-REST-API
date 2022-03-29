import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  npm: number;
  nama: string;
  jurusan: string;
  prodi: string;
  kelas: string;
  public getMahasiswa: any;
  public updateMahaSiswa: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe((param: any) => {
      this.npm = param.npm;
      this.getDataWhere(this.npm);
    });
  }
  
  getDataWhere(npm) {
    let data: Observable<any>;
    data = this.http.get(
      'http://localhost/CodeIgniter_API/index.php/api/getDataById/' + npm
    );
    data.subscribe((result) => {
      this.getMahasiswa = result;
      this.npm = this.getMahasiswa[0].npm;
      this.nama = this.getMahasiswa[0].nama;
      this.jurusan = this.getMahasiswa[0].jurusan;
      this.prodi = this.getMahasiswa[0].prodi;
      this.kelas = this.getMahasiswa[0].kelas;
    });
  }

  submit() {
    if (
      this.npm != null &&
      this.nama != null &&
      this.jurusan != null &&
      this.prodi != null &&
      this.kelas != null
    ) {
      this.updateData(this.npm);
      console.log(
        this.npm,
        this.nama,
        this.jurusan,
        this.prodi,
        this.kelas
      );
      alert('Update Data Successfully');
    } else {
      alert('There are some null datas!');
    }
  }
  updateData(npm) {
    let data: Observable<any>;
    data = this.http.get(
      'http://localhost/CodeIgniter_API/index.php/api/PutData/' +
        this.npm +
        '/' +
        this.nama +
        '/' +
        this.jurusan +
        '/' +
        this.prodi +
        '/' +
        this.kelas
    );
    data.subscribe((result) => {
      this.updateMahaSiswa = result;
      console.log(result);
    });
  }
  ngOnInit() {
  }

}

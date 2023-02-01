import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
})
export class UploadImageComponent implements OnInit {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  filedata: any;

  fileEvent(e: any) {
    this.filedata = e.target.files[0];
  }

  /* Upload button functioanlity */
  onSubmitform(f: NgForm) {
    var myFormData = new FormData();

    const headers = new HttpHeaders();

    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    myFormData.append('gambar_barang', this.filedata);

    /* Image Post Request */
    this.http
      .post(`${this.baseUrl}/upload`, myFormData, {
        headers: headers,
      })
      .subscribe((data: any) => {
        //Check success message
        //sweetalert message popup
        Swal.fire({
          title: 'Hurray!!',
          text: data['message'],
          icon: 'success',
        });
      });
  }

  ngOnInit(): void {}
}

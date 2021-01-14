import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'nanny-form',
  templateUrl: './nanny-form.component.html',
  styleUrls: ['./nanny-form.component.css'],
})
export class NannyFormComponent {
  selectedFile: any = File;

  onSubmit(data) {
    this.http.post('/', data).subscribe((res) => {
      console.warn(res);
    });
    console.warn(data);
  }

  constructor(private http: HttpClient) {}
  ngOnInit() {}
  url = './assets/';
  log(test: string) {
    console.log(test);
  }
  onFileSelected(event) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
    this.selectedFile = <File>event.target.files[0];
  }
  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http
      .post('/', fd, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          console.warn(
            'upload progress: ' +
              Math.round((event.loaded / event.total) * 100) +
              '%'
          );
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
        console.warn(event);
      });
  }
}

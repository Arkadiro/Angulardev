import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostFileService {

  constructor(private http: HttpClient) { }

  onUpload(uploadData) {
   return this.http.post('https://jsonplaceholder.typicode.com/posts', uploadData, {
      reportProgress: true,
      observe: 'events'
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { PostFileService } from 'src/app/post-file.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.less']
})
export class FileuploadComponent implements OnInit {

  private selectedFile = null;
  constructor(private postFiles: PostFileService) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile);
  }

  onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.postFiles.onUpload
      (uploadData)
      .subscribe(event => {
        if(event.type === 4) {
          console.log('uploaded!')
        }
      });
  }

}

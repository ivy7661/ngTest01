import { Component } from '@angular/core';
import { Observable,catchError,of,switchMap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgFor,NgIf } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [NgFor,NgIf,NgClass,HttpClientModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss'
})
export class UploadFileComponent {
  isdragover:boolean = false;
  selectedFilesName:string[]=[];
  selectedFilesCount:number = 0;
  constructor(private http: HttpClient){}
  dragover(e:Event){
    e.stopPropagation();
    e.preventDefault();
    this.isdragover=true;
    console.log("dragover");
  }
  dragleave(e:Event){
    e.stopPropagation();
    e.preventDefault();
    this.isdragover=false;
    console.log("dragleave");
  }
  dragenter(e:Event){
    e.stopPropagation();
    e.preventDefault();
    console.log("dragenter");
  }
  drop(e:any){
   e.stopPropagation();
   e.preventDefault();
   this.isdragover=false;
   let dataTransfer=e.dataTransfer;
   let files=dataTransfer.files;
   console.log("files:");
   console.log(files);
   this.showSelectedFiles(files);
   this.handleFiles(files).subscribe();
 }
  inputFile(e:any){
    console.log(e.target.files);
    this.showSelectedFiles(e.target.files);
    this.handleFiles(e.target.files).subscribe();
  }
  showSelectedFiles(files: FileList): void{
    this.selectedFilesName = [];
    this.selectedFilesCount = files.length;
    for(let i=0;i<files.length;i++){
      this.selectedFilesName.push(files[i].name);
    }
  }
  handleFiles(filesToUp: FileList): Observable<{message:string}> {
    const url: string = "http://localhost:4200/uploadFile";
    const formData: FormData = new FormData();
    for(let i=0;i<filesToUp.length;i++){
      formData.append('files', filesToUp[i]);
    }
    return this.http
      .post<any>(url, formData).pipe(
        switchMap((res: {message:string}) => { console.log(res); return of(res); }),
        catchError(er=>{console.log(er);return of({message:"error"})})
      );
  }
}

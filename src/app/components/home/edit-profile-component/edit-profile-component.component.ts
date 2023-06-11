import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-profile-component',
  templateUrl: './edit-profile-component.component.html',
  styleUrls: ['./edit-profile-component.component.scss']
})
export class EditProfileComponentComponent implements OnInit {

  description:string=this.data.param1;

  showEditDescription=true;
  showEditPicture=false;
  showEditButtonPicture=true;
  showEditButtonDescription=false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dataService:DataService) { console.log(this.data.param1);}

  ngOnInit(): void {
  }

  selectedFile!: File;

  onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
  }


  uploadSelectedFile(){
    if(this.selectedFile){
      const formData:FormData =new FormData();
      formData.append('file',this.selectedFile, this.selectedFile.name);  
      this.dataService.UpdateProfilePictureByUserId( formData).subscribe((res)=>{
        if(res){
             console.log("Poza a fost schimbată cu succes");
        }else 
             console.log("Poza nu s-a putut actualiza");
      });
    }else{
      console.error('Niciun fisier nu este selectat');
    }
  }


  updateProfileDescription(){
      if(this.description!=''){
      this.dataService.UpdateProfileDescriptionByUserId(this.description).subscribe();
    }
  }

  goToEditDescription(){
    this.showEditButtonDescription=false;
    this.showEditDescription=true;
    this.showEditButtonPicture=true;
    this.showEditPicture=false;
  }

  goToEditPicture(){
    this.showEditButtonDescription=true;
    this.showEditDescription=false;
    this.showEditButtonPicture=false;
    this.showEditPicture=true;
  }

}

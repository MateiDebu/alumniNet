import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-profile-component',
  templateUrl: './edit-profile-component.component.html',
  styleUrls: ['./edit-profile-component.component.scss']
})
export class EditProfileComponentComponent implements OnInit {

  description:string='';
  file!:File;

  showEditDescription=true;
  showEditPicture=false;
  showEditButtonPicture=true;
  showEditButtonDescription=false;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  onFileSelected(event:any){
    this.file =event.target.files[0];
  }

  updateProfilePicture(){
    console.log(this.file);
    if(this.file){
      const formData:FormData =new FormData();
      formData.append('file',this.file);    
    this.dataService.UpdateProfilePictureByUserId(formData).subscribe((res)=>{
      if(res){
           alert("Poza a fost schimbată cu succes");
      }else 
           alert("Poza nu s-a putut actualiza");
    });
  }
  }

  updateProfileDescription(){
      if(this.description!=''){
      this.dataService.UpdateProfileDescriptionByUserId(this.description).subscribe((res)=> {
        if(res){
          alert("Descrierea ta a fost actualizată cu succes");
        }else{
          alert("Descrierea nu s-a putut actualiza");
        }
      });
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Experience } from 'src/app/models/experience.mode';
import { Faculty } from 'src/app/models/faculty.mode';
import { FinishedStudy } from 'src/app/models/finished-study.mode';
import { LearningSchedule } from 'src/app/models/learning-schedule.mode';
import { Profile } from 'src/app/models/profile.mode';
import { Specialization } from 'src/app/models/specialization.mode';
import { StudyProgram } from 'src/app/models/study-program.mode';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-profile-component',
  templateUrl: './edit-profile-component.component.html',
  styleUrls: ['./edit-profile-component.component.scss']
})
export class EditProfileComponentComponent implements OnInit {
  description:string='';
  picturePath:string='';

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  updateProfile(){
    var profile=new Profile()
    if(this.description!='' && this.picturePath!=''){
      profile.description=this.description;
      profile.profilePicture=this.picturePath;
      this.dataService.UpdateProfileByUserId(profile).subscribe((res) =>{
        if(res){
          alert("Profilul a fost actualizat cu succes");
        }else
        alert("Profilul nu a putut fi actualizat");
      });
    }else if(this.description!='' && this.picturePath==''){
      this.dataService.UpdateProfileDescriptionByUserId(this.description).subscribe((res)=> {
        if(res){
          alert("Descrierea ta a fost actualizată cu succes");
        }else{
          alert("Descrierea nu s-a putut actualiza");
        }
      });
    }else if(this.picturePath!='' && this.description=='')
      this.dataService.UpdateProfilePictureByUserId(this.picturePath).subscribe((res)=>{
        if(res){
          alert("Poza a fost schimbată cu succes");
        }else alert("Poza nu s-a putut actualiza");
      });
  }
}

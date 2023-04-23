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
  
  faculties: Faculty[]=[];
  specializations:Specialization[]=[];
  learningSchedules: LearningSchedule[]=[];
  studyPrograms: StudyProgram[]=[];
  description:string='';
  picturePath:string='';

  specializationId:number=0;
  learningScheduleId:number=0;
  studyProgramId:number=0;
  finishStudyYear!:number;

  companyName:string='';
  jobTitle:string='';
  startDate!:number;
  endDate!: number;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
   this.dataService.GetAllFaculties().subscribe(( faculties: Faculty[]) => {
     this.faculties=faculties;
   })

   this.dataService.GetAllLearningSchedule().subscribe((learningSchedules:LearningSchedule[])=>{
    this.learningSchedules=learningSchedules;
   })

   this.dataService.GetAllStudyProgram().subscribe((studyPrograms: StudyProgram[])=>{
    this.studyPrograms=studyPrograms;
   })

  }

  specializationsFaculty(facultyId:number){
    this.dataService.GetSpecializationsByFacultyId(facultyId).subscribe((specializations : Specialization[]) => {
      this.specializations=specializations;
    })
  }

  setSpecializationId(id:number){
    this.specializationId=id;
  }

  setLearningScheduleId(id:number){
    this.learningScheduleId=id;
  }

  setStudyProgramId(id:number){
    this.studyProgramId=id;
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
   
  addStudies(){
    var finishedStudy=new FinishedStudy();
    finishedStudy.specializationId=this.specializationId;
    finishedStudy.learningScheduleId=this.learningScheduleId;
    finishedStudy.studyProgramId=this.studyProgramId;
    finishedStudy.year=this.finishStudyYear;
    this.dataService.AddFinishedStudy(finishedStudy).subscribe((res)=>{
      if(res){
        alert("Studile au fost adăgate cu succes");
      }else
        alert("Toate câmpurile trebuie completate");
    });
  }

  addNewExperience(){
    var experience=new Experience();
    experience.companyName=this.companyName;
    experience.jobTitle=this.jobTitle;
    experience.startDate=this.startDate;
    experience.endDate=this.endDate;
    console.log(experience);
    this.dataService.AddNewExperienceForUser(experience).subscribe((res)=>{
            if(res){
              alert("Experiența a fost adăugată cu succes");
            }else alert("Experiența nu s-a putut adăuga");
          });
  }

}

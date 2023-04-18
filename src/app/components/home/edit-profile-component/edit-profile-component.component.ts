import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Faculty } from 'src/app/models/faculty.mode';
import { LearningSchedule } from 'src/app/models/learning-schedule.mode';
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

}

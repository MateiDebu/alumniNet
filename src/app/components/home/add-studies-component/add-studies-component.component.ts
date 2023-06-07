import { Component, OnInit } from '@angular/core';
import { Faculty } from 'src/app/models/faculty.mode';
import { FinishedStudy } from 'src/app/models/finished-study.mode';
import { LearningSchedule } from 'src/app/models/learning-schedule.mode';
import { Specialization } from 'src/app/models/specialization.mode';
import { StudyProgram } from 'src/app/models/study-program.mode';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-studies-component',
  templateUrl: './add-studies-component.component.html',
  styleUrls: ['./add-studies-component.component.scss']
})
export class AddStudiesComponentComponent implements OnInit {

  specializationId:number=0;
  learningScheduleId:number=0;
  studyProgramId:number=0;
  finishStudyYear!:number;

  faculties: Faculty[]=[];
  specializations:Specialization[]=[];
  learningSchedules: LearningSchedule[]=[];
  studyPrograms: StudyProgram[]=[];

  constructor(private dataService : DataService) { }

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

  addStudies(){
    var finishedStudy=new FinishedStudy();
    finishedStudy.specializationId=this.specializationId;
    finishedStudy.learningScheduleId=this.learningScheduleId;
    finishedStudy.studyProgramId=this.studyProgramId;
    finishedStudy.year=this.finishStudyYear;
    this.dataService.AddFinishedStudy(finishedStudy).subscribe();
  }

}

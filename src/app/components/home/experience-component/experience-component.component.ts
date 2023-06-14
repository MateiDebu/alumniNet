import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experience } from 'src/app/models/experience.mode';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog-component/confirmation-dialog.component';

@Component({
  selector: 'app-experience-component',
  templateUrl: './experience-component.component.html',
  styleUrls: ['./experience-component.component.scss']
})
export class ExperienceComponentComponent implements OnInit {

  experience: Experience[] = [];

  showCompanyEditor:boolean = false;
  showJobEditor = false;
  showDateEditor = false;
  showMessageError = false;

  showEndDate = false;
  showStartDate = true;


  active:number = 0;
  company:string = '';
  jobTitle:string = '';
  startDate:number | null = null;
  endDate:number | null = null;

  constructor(private dataService:DataService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllExperience();
  }

  getAllExperience(){
    this.dataService.GetAllExperiencesForUser().subscribe((experience:Experience[])=>{
      this.experience = experience;
    });
  }

  setNameCompany(company:string){
    this.company = company;
  }

  setJobTitle(jobTitle:string){
    this.jobTitle = jobTitle;
  }

  openDeleteDialog(id:number){
    
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      height: '240px',
      disableClose:true,
      data : {
        title:   'Confirmare ștergere',
        message: 'Sigur doriți să ștergeți experiența selectată?',
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataService.DeleteExperience(id).subscribe((res)=>{
          if(res){
            this.getAllExperience();
          }
        });
      }});
  }

  showUpdateCompany(){
    this.showCompanyEditor = true;
    this.showJobEditor     = false;
    this.showDateEditor    = false;
    this.showMessageError  = false;
  }

  showUpdateJob(){
    this.showJobEditor     = true;
    this.showDateEditor    = false;
    this.showCompanyEditor = false;
    this.showMessageError  = false;
  }

  showUpdateDate(){ 
    this.showDateEditor    = true;
    this.showCompanyEditor = false;
    this.showJobEditor     = false;
    this.showMessageError  = false;
  }
  
  setIsActive(active:number){
    this.active = active;
  }

  closeEditors(){
    this.showMessageError  = false;
    this.showCompanyEditor = false;
    this.showJobEditor     = false;
    this.showDateEditor    = false;
    this.company           ='';
    this.jobTitle          ='';
    this.startDate         = null;
    this.endDate           = null;
    this.showMessageError  = false;
  }

  updateCompany(id:number){
    if(this.company != ''){
      this.dataService.UpdateExperienceCompanyName(id, this.company).subscribe((res)=>{
        if(res){
          this.getAllExperience();
        }
      });
    }else
      this.showMessageError = true; 
   }

  updateJobTitle(id:number){
    if(this.jobTitle != ''){
      this.dataService.UpdateExperienceJobTitle(id, this.jobTitle).subscribe((res)=>{
        if(res){
          this.getAllExperience();
        }
      });
    }else
      this.showMessageError = true; 
   }

  updateStartDate(id:number){
    if(!this.startDate && !this.endDate)
       this.showMessageError = true;
      else
      {
        if(this.startDate)
        {
          this.dataService.UpdateExperienceStartDate(id, this.startDate).subscribe((res)=>{
            if(res){
              this.getAllExperience();
              this.showMessageError = false;
              this.startDate = null;
            }
          }
          );
         }
      }
  }

  updateEndDate(id:number){
    if(!this.startDate && !this.endDate)
       this.showMessageError = true;
      else
      {
        if(this.endDate)
        {
          this.dataService.UpdateExperienceEndDate(id, this.endDate).subscribe((res)=>{
            if(res){
              this.getAllExperience();
              this.showMessageError = false;
              this.endDate = null;
            }
          }
          );
         }
      }
  }

  restrictInput(event: any) {
    const input = event.target as HTMLInputElement;
    const maxLength = 4;
    const inputValue = input.value;
  
    if (inputValue.length > maxLength) {
      input.value = inputValue.slice(0, maxLength);
    } else
       if (!/^\d+$/.test(inputValue)) {
       input.value = inputValue.replace(/\D/g, '');
    }
  }

  openEndDate(){
    this.showEndDate      = true;
    this.showStartDate    = false;
    this.startDate        = null;
    this.showMessageError = false;
  }

  openStartDate(){
    this.showEndDate      = false;
    this.showStartDate    = true;
    this.endDate          = null;
    this.showMessageError = false;
  }
}

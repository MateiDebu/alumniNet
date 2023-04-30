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

  experience:Experience[]=[];

  showCompanyEditor:boolean=false;
  showJobEditor=false;
  showDateEditor=false;
  showMessageError=false;


  active:number=0;
  company:string='';
  jobTitle:string='';
  startDate!:number;
  endDate!:number;

  constructor(private dataService:DataService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllExperience();
  }

  getAllExperience(){
    this.dataService.GetAllExperiencesForUser().subscribe((experience:Experience[])=>{
      this.experience=experience;
    });
  }

  openDeleteDialog(id:number){
    
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      height: '240px',
      data : {
        title: 'Confirmare ștergere',
        message: 'Sigur doriți să ștergeți experiența selectată?',
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataService.DeleteExperience(id).subscribe((res)=>{
          if(res){
            alert("Ștergerea s-a efectuat cu succes");
            this.getAllExperience();
          }else
            alert("Ștergerea nu s-a putut efectua");
          
        });
      }});
  }

  showUpdateCompany(){
    this.showCompanyEditor=true;
    this.showJobEditor=false;
    this.showDateEditor=false;
  }

  showUpdateJob(){
    this.showJobEditor=true;
    this.showDateEditor=false;
    this.showCompanyEditor=false;
  }

  showUpdateDate(){ 
    this.showDateEditor=true;
    this.showCompanyEditor=false;
    this.showJobEditor=false;
  }
  
  setIsActive(active:number){
    this.active=active;
  }

  closeEditors(){
    this.showMessageError=false;
    this.showCompanyEditor=false;
    this.showJobEditor=false;
    this.showDateEditor=false;
    this.company='';
    this.jobTitle='';
    this.startDate!;
    this.endDate!;
  }

  updateCompany(id:number){
    if(this.company!=''){
      this.dataService.UpdateExperienceCompanyName(id, this.company).subscribe((res)=>{
        if(res){
          alert('Schimbarea numelui companiei s-a realizat cu succes');
          this.company='';
          this.getAllExperience();
        }else
         alert('Schimbarea numelui companiei nu s-a putut efectua')
      });
    }else
      this.showMessageError=true; 
   }

  updateJobTitle(id:number){
    if(this.jobTitle!=''){
      this.dataService.UpdateExperienceJobTitle(id, this.jobTitle).subscribe((res)=>{
        if(res){
          alert('Schimbarea postului s-a realizat cu succes');
          this.jobTitle='';
          this.getAllExperience();
        }else
         alert('Schimbarea postului nu s-a putut efectua')
      });
    }else
      this.showMessageError=true; 
   }

  updatePeriod(id:number){
    var isOkStartDate=false;
    var isOkEndDate=false;
    if(this.endDate==null && this.startDate==0){
      this.showMessageError=true;
    }else if(this.startDate!=null && this.endDate!=null){
      this.dataService.UpdateExperienceStartDate(id, this.startDate).subscribe((res)=>{
        if(res){
          console.log('Data de început s-a schimbat cu succes');
          isOkStartDate=true;
        }else{
          console.log('Data de început nu s-a putut actualiza');
        }});

        this.dataService.UpdateExperienceEndDate(id, this.endDate).subscribe((res)=>{
          if(res){
            console.log('Data de sfârsit s-a schimbat cu succes');
            isOkEndDate=true;
          }else{
            console.log('Data de sfârsit nu s-a putut actualiza');
          }});

          if(isOkEndDate && isOkStartDate){
            alert('Schimbarea de perioadă s-a executat cu succes');
            this.startDate!;
            this.endDate!;
            this.getAllExperience();
          } else
            alert('Schimbarea de perioadă nu s-a putut efectua');
    }else if(this.startDate!=null){
      this.dataService.UpdateExperienceStartDate(id, this.startDate).subscribe((res)=>{
        if(res){
          alert('Data de început s-a schimbat cu succes');
          this.startDate!;
          this.getAllExperience();
          }else{
          alert('Data de început nu s-a putut actualiza');
        }});
    }else if(this.endDate!=null){
      this.dataService.UpdateExperienceEndDate(id, this.endDate).subscribe((res)=>{
        if(res){
          alert('Data de sfârsit s-a schimbat cu succes');
          this.endDate!;
          this.getAllExperience();
        }else{
          alert('Data de sfârsit nu s-a putut actualiza');
        }});
    }
  }
}

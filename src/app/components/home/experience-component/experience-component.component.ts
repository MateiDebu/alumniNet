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
  job:string='';
  startDate:number=0;
  endDate:number=0;

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
          }else
            alert("Ștergerea nu s-a putut efectua");
          
        });
      }});
  }

  showUpdateCompany(){
    this.showCompanyEditor=true;
  }

  showUpdateJob(){
    this.showJobEditor=true;
 
  }

  showUpdateDate(){ 
    this.showDateEditor=true;
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
    this.job='';
    this.startDate=0;
    this.endDate=0;
  }

  updateCompany(id:number){

  }
}

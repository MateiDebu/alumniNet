import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.mode';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-experience-component',
  templateUrl: './add-experience-component.component.html',
  styleUrls: ['./add-experience-component.component.scss']
})
export class AddExperienceComponentComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  companyName:string='';
  jobTitle:string='';
  startDate!:number;
  endDate!: number;

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

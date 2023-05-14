import { Component, OnInit, Inject } from '@angular/core';
import { Experience } from 'src/app/models/experience.mode';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-experience-user-component',
  templateUrl: './experience-user-component.component.html',
  styleUrls: ['./experience-user-component.component.scss']
})
export class ExperienceUserComponentComponent implements OnInit {

  experience:Experience[]=[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dataService: DataService ) { }

  ngOnInit(): void {
    this.setExperience();
  }

  setExperience(){
    this.dataService.GetExperienceByProfileId(this.data.param1).subscribe((exp)=>{
      this.experience=exp;
    });
  }
}

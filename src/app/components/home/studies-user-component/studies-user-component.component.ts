import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FinishedStudyDetailed } from 'src/app/models/finished-study-detailed.mode';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-studies-user-component',
  templateUrl: './studies-user-component.component.html',
  styleUrls: ['./studies-user-component.component.scss']
})
export class StudiesUserComponentComponent implements OnInit {

  finishedStudies:FinishedStudyDetailed[]=[];

  viewMoreInformation=false;
  viewMoreButton=true;
  active!:number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dataService: DataService ) { 
    this.setFinishedStudies();
  }

  ngOnInit(): void {
  }

  setFinishedStudies(){
    this.dataService.GetFinishedStudyByProfileId(this.data.param1).subscribe((studies)=>{
      this.finishedStudies=studies;
    });
  }

  viewMore(){
    this.viewMoreInformation=true;
    this.viewMoreButton=false;
  }

  viewLess(){
    this.viewMoreInformation=false;
    this.viewMoreButton=true;
  }

  setIsActive(active:number){
    this.active=active;
  }

}

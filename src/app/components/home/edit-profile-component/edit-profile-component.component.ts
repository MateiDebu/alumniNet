import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Faculty } from 'src/app/models/faculty.mode';
import { Specialization } from 'src/app/models/specialization.mode';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-edit-profile-component',
  templateUrl: './edit-profile-component.component.html',
  styleUrls: ['./edit-profile-component.component.scss']
})
export class EditProfileComponentComponent implements OnInit {
  
  faculties: Faculty[]=[];
  specializations:Specialization[]=[];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
   this.dataService.GetAllFaculties().subscribe(( faculties: Faculty[]) => {
     this.faculties=faculties;
   })
  }

  specializationsFaculty(facultyId:number){
    this.dataService.GetSpecializationsByFacultyId(facultyId).subscribe((specializations : Specialization[]) => {
      this.specializations=specializations;
    })
  }

}

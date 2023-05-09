import { Component, OnInit } from '@angular/core';
import { Faculty } from 'src/app/models/faculty.mode';
import { Specialization } from 'src/app/models/specialization.mode';
import { User } from 'src/app/models/user.mode';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  faculties: Faculty[]=[];
  specializations:Specialization[]=[];
  showAdvancedSearch=false;
  showSearch=true;
  searchPeople:string='';

  users:User[]=[];

  constructor(private dataService: DataService) { 
    this.showAdvancedSearch=false;
    this.showSearch=true;
    this.dataService.GetAllUsers().subscribe((users:User[])=>{
        this.users=users;
    });
  }

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

  goToAdvancedSearch(){
    this.showAdvancedSearch=true;
    this.showSearch=false;
  }
}

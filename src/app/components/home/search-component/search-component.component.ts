import { Component, OnInit } from '@angular/core';
import { Faculty } from 'src/app/models/faculty.mode';
import { Specialization } from 'src/app/models/specialization.mode';
import { User } from 'src/app/models/user.mode';
import { DataService } from 'src/app/services/data.service';
import { StudiesUserComponentComponent } from '../studies-user-component/studies-user-component.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ExperienceUserComponentComponent } from '../experience-user-component/experience-user-component.component';
import { PostsUserComponentComponent } from '../posts-user-component/posts-user-component.component';
import { ProfileUserComponentComponent } from '../profile-user-component/profile-user-component.component';
import {map} from 'rxjs/operators';
import { FinishedStudyDetailed } from 'src/app/models/finished-study-detailed.mode';
import { Post } from 'src/app/models/post.mode';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  faculties: Faculty[]=[];
  specializations:Specialization[]=[];
  searchPeople:string='';

  selectFaculty:string='';
  selectSpecialization:string='';

  showAllPostsButton=true;
  showAllPosts=false;
  showCloseButton=false;
  showSearch=true;
  
  showResult=false;
  users:User[]=[];
  posts:Post[]=[];

  currentUser:User = new User();

  searchR:User[]=[];

  constructor(private dataService: DataService,private dialog:MatDialog) { 
    this.dataService.GetAllUsers().subscribe((users:User[])=>{
        this.users=users;
        this.searchR=users;
    });
    
    this.getCurrentUser();
  }

  ngOnInit(): void {
    this.dataService.GetAllFaculties().subscribe(( faculties: Faculty[]) => {
      this.faculties=faculties;
  })
  }

  getCurrentUser(){
    this.dataService.GetUserById().subscribe((user) =>{
      this.currentUser=user;
    })
  }

  showPosts(){
    this.showAllPostsButton=false;
    this.showAllPosts=true;
    this.showCloseButton=true;
    this.showSearch=false;
    this.getPosts();
    this.getCurrentUser();
  }

  closePosts(){
    this.showAllPostsButton=true;
    this.showAllPosts=false;
    this.showCloseButton=false;
    this.showSearch=true;
  }

  getPosts(){
    this.dataService.GetAllPostsSorted().subscribe( (posts:Post[])=>{
      this.posts=posts;
    })
  }

  onSearch(){
    const searchResults=this.users.filter(user => 
      user.firstName.toLowerCase().includes(this.searchPeople.toLowerCase().trim()) ||
      user.lastName.toLowerCase().includes(this.searchPeople.toLowerCase().trim()) ||
      (user.firstName.toLowerCase()+' '+user.lastName.toLowerCase()).includes(this.searchPeople.toLowerCase().trim()) ||
      (user.lastName.toLowerCase()+' '+user.firstName.toLowerCase()).includes(this.searchPeople.toLowerCase().trim())
    );
     
    this.searchR=searchResults;
  }

  specializationsFaculty(facultyId:number){
    this.dataService.GetSpecializationsByFacultyId(facultyId).subscribe((specializations : Specialization[]) => {
      this.specializations=specializations;
    })
  }

  searchGraduates(){
    this.showResult=true;
  }

  openStudiesForSearchUser(profileId:number){

    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      param1: profileId
    }

    dialogConfig.width='650px';
    dialogConfig.height='400px';
    dialogConfig.disableClose=true;

    let dialogRef = this.dialog.open(StudiesUserComponentComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('Afișarea s-a făcut cu succes');
      }else
        console.log('Afișarea studiilor s-a închis');
      });
  }

  openExperienceForSearchUser(profileId:number){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      param1: profileId
    }

    dialogConfig.width='650px';
    dialogConfig.height='400px';
    dialogConfig.disableClose=true;

    let dialogRef = this.dialog.open(ExperienceUserComponentComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('Afișarea s-a făcut cu succes');
      }else
        console.log('Afișarea experienței s-a închis');
      });
  }
  

  openPostsForSearchUser(userId:string,firstName:string, lastName:string){
    var fullName=firstName+" "+ lastName;
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      param1: userId,
      param2: fullName
    }

    dialogConfig.width='650px';
    dialogConfig.height='600px';
    dialogConfig.disableClose=true;

    let dialogRef = this.dialog.open(PostsUserComponentComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('Afișarea s-a făcut cu succes');
      }else
        console.log('Afișarea postărlor s-a închis');
      });
  }

  
  openProfileForSearchUser(profileId:number, firstName:string, lastName:string){
    var fullName=firstName+" "+ lastName;
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      param1: profileId,
      param2: fullName
    }

    dialogConfig.width='500px';
    dialogConfig.height='500px';
    dialogConfig.disableClose=true;

    let dialogRef = this.dialog.open(ProfileUserComponentComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('Afișarea s-a făcut cu succes');
      }else
        console.log('Afișarea postărlor s-a închis');
      });
  }

}

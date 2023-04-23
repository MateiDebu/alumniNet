import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience.mode';
import { FinishedStudyDetailed } from 'src/app/models/finished-study-detailed.mode';
import { FinishedStudy } from 'src/app/models/finished-study.mode';
import { Post } from 'src/app/models/post.mode';
import { User } from 'src/app/models/user.mode';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  firstNameUser:string='';
  lastNameUser:string='';
  description:string='eu sunt din brasov si ...'

  user: User = new User;
  experience:Experience[]=[];
  studies:FinishedStudy[]=[];
  finishStudyDetailed:FinishedStudyDetailed[]=[];

  showFinishedStudys=false;
  showExperience=false;

  showEditPage=false;
  showSearchPage=false;
  showHomePage=true;
  addPost=false;
  closeButtonPost=true;

  imagePathPost:string='';
  textPost:string='';
  titlePost:string='';

  constructor(private auth: AuthService, private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.GetUserById().subscribe((user:User)=>{
      this.user=user;
     });

    this.dataService.GetAllExperiencesForUser().subscribe((experience:Experience[])=>{
      this.experience=experience;
    });

    this.dataService.GetFinishedStudyByUserId().subscribe((finishStudyDetailed:FinishedStudyDetailed[])=>{
      this.finishStudyDetailed=finishStudyDetailed;
    });

    console.log(this.finishStudyDetailed);
  }

  setFaculty(id:number){
    return this.dataService.GetFacultyById(id).subscribe();
  }

  setName(){
    this.firstNameUser=this.user.firstName.charAt(0).toUpperCase()+this.user.firstName.slice(1);
    this.lastNameUser=this.user.lastName.charAt(0).toUpperCase()+this.user.lastName.slice(1);
    return this.firstNameUser+' '+this.lastNameUser;
  }

  openFinishedStudys(){
    this.showFinishedStudys=true;
    this.showExperience=false;
  }

  openExperience(){
    this.showExperience=true;
    this.showFinishedStudys=false;
  }

  close(){
    this.showExperience=false;
    this.showFinishedStudys=false;
  }

  setPath(){

  }

  setDescription(){
    return this.description;
  }

  goToHomePage(){
    this.showEditPage=false;
    this.showSearchPage=false;
    this.showHomePage=true;
  }

  goToEditProfilePage(){
    this.showEditPage=true;
    this.showSearchPage=false;
    this.showHomePage=false;
  }

  goToSearchPage(){
    this.showEditPage=false;
    this.showSearchPage=true;
    this.showHomePage=false;
  }

  goToLoginPage(){
    this.auth.logout();
  }  

  openNewPost(){
    this.addPost=true;
    this.closeButtonPost=false;
  }

  addNewPost(){
    var newPost=new Post();
    newPost.imagePath=this.imagePathPost;
    newPost.text=this.textPost;
    newPost.title=this.titlePost;
    this.dataService.AddNewPostForUser(newPost).subscribe((res)=> {
      if(res){
        alert("Postarea a fost adăugată cu succes");
      }else{
        alert("Postarea nu a putut fi adăugată");
      }
    });
  }

  closePost(){
    this.addPost=false;
    this.closeButtonPost=true;
  }
}

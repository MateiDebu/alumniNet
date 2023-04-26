import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.mode';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {

  showTitleEditor=false;
  showTextEditor=false;
  showImageEditor=false;
  

  titlePost:string='';
  textPost:string='';

  active:number=0;


  posts:Post[]=[];
  constructor(private dataService:DataService) {
    this.dataService.GetPostsByUserId().subscribe((posts:Post[])=>{
      this.posts=posts;
    });
   }

  ngOnInit(): void {
  
  }

  showUpdateTitlePost(){
    this.showTitleEditor=true;
    this.showTextEditor=false;
    this.showImageEditor=false;
  }
  showUpdateTextPost(){
    this.showTextEditor=true;
    this.showImageEditor=false;
    this.showTitleEditor=false;
  }
  showUpdateImagePost(){
    this.showImageEditor=true;
    this.showTitleEditor=false;
    this.showTextEditor=false;
  }

  deletePost(id:number){

  }
  updateDescriptionPost(id:number){

  }
  updateTitlePost(id:number){

  }
  updateImagePost(id:number){

  }

  closeEditors(){
    this.showTitleEditor=false;
    this.showTextEditor=false;
    this.showImageEditor=false;
  }

  setIsActive(active:number){
    this.active=active;
  }
}

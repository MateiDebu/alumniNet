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
  

  postTitle:string='';
  postText:string='';

  active:number=0;


  posts:Post[]=[];
  constructor(private dataService:DataService) {}

  ngOnInit(): void {
   this.refreshPosts();
  }

  refreshPosts(){
    this.dataService.GetPostsByUserId().subscribe((posts:Post[])=>{
      this.posts=posts;
    });
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
    this.dataService.DeletePost(id).subscribe((res)=>{
      if(res){
        alert('Ștergerea s-a realizat cu succes');
      }else
        alert('Ștergerea nu s-a putut realiza');
    });

    this.refreshPosts();

  }
  updateDescriptionPost(postId:number){
    this.dataService.UpdatePostText(postId, this.postText).subscribe((res)=>{
      if(res){
        alert('Schimbarea descrieri s-a reaalizat cu succes');
      }else
       alert('Schimbarea descrieri nu s-a putut efectua')
    });
  }
  updateTitlePost(postId:number){
    this.dataService.UpdatePostTitle(postId, this.postTitle).subscribe((res)=>{
      if(res){
        alert('Schimbarea titlului s-a reaalizat cu succes');
      }else
       alert('Schimbarea titlului nu s-a putut efectua')
    });
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

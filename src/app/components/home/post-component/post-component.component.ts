import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.mode';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog-component/confirmation-dialog.component';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {

  showTitleEditor = false;
  showTextEditor  = false;
  showImageEditor = false;

  showMessageError = false;
  

  postTitle:string = '';
  postText:string = '';
  active:number = 0;

  closeButtonPost = true;
  showClosePosts = false;
  showPosts = false;
  addPost = false;
  showButtonShowPosts = true;

  imageUrlAdd:string = '';
  textPostAdd:string = '';
  titlePostAdd:string = '';


  posts: Post[] = [];
  constructor(private dataService:DataService,private dialog:MatDialog) {
  }

  ngOnInit(): void {
   this.refreshPosts();
  }

  openDeleteDialog(id:number){
    
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      height: '240px',
      disableClose: true,
      data : {
        title:   'Confirmare ștergere',
        message: 'Sigur doriți să ștergeți postarea ?',
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataService.DeletePost(id).subscribe((res)=>{
          if(res){
            this.refreshPosts();
          }else
            this.refreshPosts();
        });
      }});
  }


  refreshPosts(){
    this.dataService.GetPostsByUserId().subscribe((posts:Post[])=>{
      this.posts = posts;
    });
  }

  showUpdateTitlePost(){
    this.showTitleEditor  = true;
    this.showTextEditor   = false;
    this.showImageEditor  = false;
    this.showMessageError = false;
  }
  showUpdateTextPost(){
    this.showTextEditor   = true;
    this.showImageEditor  = false;
    this.showTitleEditor  = false;
    this.showMessageError = false;
  }
  showUpdateImagePost(){
    this.showImageEditor  = true;
    this.showTitleEditor  = false;
    this.showTextEditor   = false;
    this.showMessageError = false;
  }

  updateDescriptionPost(postId:number){
    if(this.postText != ''){
      this.dataService.UpdatePostText(postId, this.postText).subscribe((res)=>{
        if(res){
          this.postText = '';
          this.refreshPosts();
          this.showMessageError = false;
        }
      });
    }else
      this.showMessageError=true;
  }
  updateTitlePost(postId:number){
    if(this.postTitle != ''){
      this.dataService.UpdatePostTitle(postId, this.postTitle).subscribe((res)=>{
        if(res){
          this.postTitle = '';
          this.refreshPosts();
          this.showMessageError = false;
        }
      });
    }else
      this.showMessageError = true; 
  }

  updateImagePost(id:number){
  }

  closeEditors(){
    this.showTitleEditor  = false;
    this.showTextEditor   = false;
    this.showImageEditor  = false;
    this.showMessageError = false; 
    this.postText = '';
    this.postTitle = '';
  }

  setIsActive(active:number){
    this.active = active;
  }

  setTitle(title:string){
    this.postTitle = title;
  }

  setText(text:string){
    this.postText = text;
  }

  onFileSelected(event:any){
    if (event.target.files.length > 0) {
      var file = event.target.files[0];
    }

    var reader=new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (result) => {
      this.imageUrlAdd = reader.result as string;
    }
  }

  openPosts(){
    this.refreshPosts();
    this.showPosts           = true;
    this.showClosePosts      = true;
    this.showButtonShowPosts = false;
  }

   closePosts(){
    this.showPosts           = false;
    this.showClosePosts      = false;
    this.showButtonShowPosts = true;
    this.showTitleEditor     = false;
    this.showTextEditor      = false;
    this.showImageEditor     = false;
   }

  openNewPost(){
    this.addPost             = true;
    this.closeButtonPost     = false;
    this.showPosts           = false;
    this.showClosePosts      = false;
    this.showButtonShowPosts = false;
  }

  closeNewPost(){
    this.addPost             = false;
    this.closeButtonPost     = true;
    this.showButtonShowPosts = true;
    this.refreshPosts();
  }

  addNewPost(){
    let newPost = new Post();

    newPost.title = this.titlePostAdd;
    newPost.text  = this.textPostAdd;
    newPost.image = this.imageUrlAdd;

    if(this.titlePostAdd != '' || this.textPostAdd != ''){
      this.dataService.AddNewPostForUser( newPost ).subscribe((res)=> {
        if(res){
          alert("Postarea a fost adăugată cu succes");
          
        }else{
          alert("Postarea nu a putut fi adăugată");
        }
      });

      this.closeButtonPost     = true;
      this.showButtonShowPosts = true;
      this.addPost             = false;  
      this.titlePostAdd = '';
      this.textPostAdd  = '';
      this.imageUrlAdd  = '';

    }
    else
      alert("Pentru a adăuga o postare trebuie completat cel puțin un câmp");
  }
}

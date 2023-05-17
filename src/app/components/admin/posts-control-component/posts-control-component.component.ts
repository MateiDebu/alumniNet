import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Post } from 'src/app/models/post.mode';
import { DataService } from 'src/app/services/data.service';
import { DeleteConfirmationComponentComponent } from '../delete-confirmation-component/detele-confirmation-component.component';

@Component({
  selector: 'app-posts-control-component',
  templateUrl: './posts-control-component.component.html',
  styleUrls: ['./posts-control-component.component.scss']
})
export class PostsControlComponentComponent implements OnInit {

  posts:Post[]=[];
  constructor(private dataService: DataService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getPosts();
    
  }

  getPosts(){
    this.dataService.GetAllPostsSorted().subscribe((posts:Post[])=>{
      this.posts=posts;
      console.log(this.posts);
    });
  }

  deletePost(postId:number){

    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      message: 'Sigur doriți să ștergeți postarea selectată?'
    }

    dialogConfig.width='400px';
    dialogConfig.height='270px';
    dialogConfig.disableClose=true;

    let dialogRef = this.dialog.open(DeleteConfirmationComponentComponent, dialogConfig);
  
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataService.DeletePost(postId).subscribe((res)=>{
          if(res){
            alert('Ștergerea s-a efectuat cu succes');
            this.getPosts()
          }else
            alert('Ștergerea nu s-a putut realiza');
            
        });
        console.log('Stergere cu succes');
       
      }else
        console.log('Ștergere anulată');
      });
  }

}

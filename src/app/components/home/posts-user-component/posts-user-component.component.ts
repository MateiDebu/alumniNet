import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/models/post.mode';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-posts-user-component',
  templateUrl: './posts-user-component.component.html',
  styleUrls: ['./posts-user-component.component.scss']
})
export class PostsUserComponentComponent implements OnInit {


  posts:Post[]=[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dataService: DataService ) { }

  ngOnInit(): void {
    this.setPosts();
   
  }

  setPosts(){
    this.dataService.GetPostsBySearchUserId(this.data.param1).subscribe((posts)=>{
      this.posts=posts;
      console.log(this.posts);
    });
  }

  getSearchUserName(){
    return this.data.param2;
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Profile } from 'src/app/models/profile.mode';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-profile-user-component',
  templateUrl: './profile-user-component.component.html',
  styleUrls: ['./profile-user-component.component.scss']
})
export class ProfileUserComponentComponent implements OnInit {

  profile:Profile=new Profile;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dataService: DataService) { }

  ngOnInit(): void {
    this.setProfile();
  }

  setProfile(){
    this.dataService.GetProfileByProfileId(this.data.param1).subscribe((profile)=>{
      this.profile=profile;
    });
  }

  getProfileDescription(){
    return this.profile.description;
  }

  getProfilePicture(){
    return this.profile.profilePicture;
  }

  getNameSearchUser(){
     return this.data.param2;
  }

}

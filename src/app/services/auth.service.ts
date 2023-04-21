import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from "firebase/app";

import { DataService } from './data.service';
import { User } from '../models/user.mode';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  app=initializeApp(environment.firebase)
  auth=getAuth(this.app);
  constructor(private dataServie:DataService,private router:Router) { }
  

  createUser(email:string, password:string, newUser:User){
    createUserWithEmailAndPassword(this.auth,email,password).then(userCredential =>{
        userCredential.user?.getIdToken().then((idToken)=>{
        this.dataServie.AddUser(newUser,idToken).subscribe(res=>{
          if(res)
          {
              this.router.navigate(['login']);
          }
          else
          {
              alert("Inregistrare esuata");
          }
      });
        console.log("Inregistrare cu succes");
      })
    }) 
    .catch(error => {
      console.log("Ceva nu a mers bine!")
    });
  }

  login(email:string, password:string){
    
  }
}

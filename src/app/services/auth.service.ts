import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from "firebase/app";

import { DataService } from './data.service';
import { User } from '../models/user.mode';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  app=initializeApp(environment.firebase)
  auth=getAuth(this.app);
  userToken:string='';

  constructor(private dataServie:DataService,private router:Router) { }
  loggedIn =false;

  isAuthenticated(){
    const promise=new Promise(
      (resolve, reject) =>{
        setTimeout(()=> {
          resolve(this.loggedIn)
        }, 300);
      }
    );

    return promise;
  }

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
    signInWithEmailAndPassword(this.auth,email,password).then(userCredential => {
      userCredential.user?.getIdToken().then((idToken)=>{
      this.userToken=idToken;
      this.loggedIn=true;
      this.router.navigate(['home']);
    }).catch(error => {
         alert("Câmpurile completate nu sunt valide");
    });
  });
  }

  logout(){
    this.loggedIn=false;
    this.router.navigate(['login']);
  }
}

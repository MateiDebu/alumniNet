import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, sendPasswordResetEmail,onAuthStateChanged} from "firebase/auth";
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
  userToken:string='';
  loggedIn!:boolean;

  constructor(private dataService:DataService,private router:Router) {
    this.loggedIn=Boolean(localStorage.getItem('logIn'));    
    this.setTokenReloadPage();
    dataService.setTokenUser(this.userToken);
  }

  setTokenReloadPage(){
    var tokenFireBase=localStorage.getItem('fireBaseToken');
    this.userToken = tokenFireBase !== null ? tokenFireBase : '';}

  isAuthenticated(){
    const promise=new Promise(
      (resolve, reject) =>{
        setTimeout(()=> {
          resolve(this.loggedIn)
        }, 600);
      }
    );

    return promise;
  }

  createUser(email:string, password:string, newUser:User){
    createUserWithEmailAndPassword(this.auth,email,password).then(userCredential =>{
        userCredential.user?.getIdToken().then((idToken)=>{
        this.dataService.userToken=idToken;
        this.dataService.AddUser(newUser).subscribe(res=>{
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
      this.dataService.userToken=idToken;
      this.loggedIn=true;
      localStorage.setItem('logIn',this.loggedIn.toString());
      localStorage.setItem('fireBaseToken',idToken.toString());
      this.dataService.GetUserById().subscribe((user:User)=>{
            if(user.isAdmin==true){
              console.log('user este admin');
              this.router.navigate(['admin']);
            }else{
              console.log('user nu este admin');
              this.router.navigate(['home']);
            }
      });
    });
    }).catch(() => {
      alert("Adresa de mail sau parola nu sunt valide");
    });
  }

  recoverPassword(email: string){
    sendPasswordResetEmail(this.auth,email).then(() => {
      alert("S-a trimis un mail pentru recuperarea parolei")
    })
    .catch(() => {
      alert("Operația de recuperare a parolei a eșuat");
    });
  }

  logout(){
    this.loggedIn=false;
    this.router.navigate(['login']);
    localStorage.clear();
  }
}

import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth,private router:Router) { }

  login(email : string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token','true');
      this.router.navigate(['/home']);
    }, err => {
      alert('Ceva nu a mers bine');
      this.router.navigate(['']);
    })
  }

  register(email:string, password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( () =>{
        alert('V-ați înregistrat cu succes');
        this.router.navigate(['']);
    }, err =>{
        alert('Ceva nu a mers bine');
        this.router.navigate(['/register']);
    })
  }

  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['']);
    }, err => {
       alert(err.message);
    })
  }

}

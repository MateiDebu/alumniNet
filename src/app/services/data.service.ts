import { HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppSetting } from "../settings/app.settings";
import { Observable } from 'rxjs';
import { Faculty } from "../models/faculty.mode";
import { Experience } from "../models/experience.mode";
import { FinishedStudy } from "../models/finished-study.mode";
import { Profile } from "../models/profile.mode";
import { Specialization } from "../models/specialization.mode";
import { User } from "../models/user.mode";
import { StudyProgram } from "../models/study-program.mode";
import { LearningSchedule } from "../models/learning-schedule.mode";
import { Post } from "../models/post.mode";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods' : 'DELETE, POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
      //'Authorization': 'my-auth-token'
    })
  };

@Injectable({
    providedIn:'root'
})

export class DataService{
    constructor( private httpClient : HttpClient, private appSettings:AppSetting){}

   //methods for faculty
   public GetAllFaculties():Observable<Faculty[]>{
    return this.httpClient.get<Faculty[]>(this.appSettings.ApiPath+"Faculty/GetAllFaculties");
   }

   public GetFacultyById(facultyId: number):Observable<Faculty[]>{
    let param1=new HttpParams().set('id', facultyId);
    return this.httpClient.get<Faculty[]>(this.appSettings.ApiPath + "Faculty/GetFacultyById", {params:param1});
   }

   //methods for specialization
   public GetAllSpecializations(): Observable<Specialization[]>{
    return this.httpClient.get<Specialization[]>(this.appSettings.ApiPath+'Specialization/GetAllSpecializations');
   }

   public GetSpecializationsByFacultyId(facultyId:number):Observable<Specialization[]>{
    let param1=new HttpParams().set('facultyId', facultyId);
    return this.httpClient.get<Specialization[]>(this.appSettings.ApiPath+'Specialization/GetSpecializationsByFacultyId',{params:param1});
   }

   public GetSpecializationsById(id:number):Observable<Specialization[]>{
    let param1=new HttpParams().set('id', id);
    return this.httpClient.get<Specialization[]>(this.appSettings.ApiPath+'Specialization/GetSpecializationsById',{params:param1});
   }

   //methods for studyProgram
   public GetAllStudyProgram():Observable<StudyProgram[]>{
    return this.httpClient.get<StudyProgram[]>(this.appSettings.ApiPath+"StudyProgram/GetAllStudyPrograms");
   }

   public GetStudyProgramById(learningScheduleId: number):Observable<StudyProgram[]>{
    let param1=new HttpParams().set('learningScheduleId', learningScheduleId);
    return this.httpClient.get<StudyProgram[]>(this.appSettings.ApiPath + "StudyProgram/GetStudyProgramById", {params:param1});
   }

   //methods for learningSchedule
   public GetAllLearningSchedule():Observable<LearningSchedule[]>{
    return this.httpClient.get<LearningSchedule[]>(this.appSettings.ApiPath+"LearningSchedule/GetAllLearningSchedules");
   }

   public GetLearningScheduleById(learningScheduleId: number):Observable<LearningSchedule[]>{
    let param1=new HttpParams().set('learningScheduleId', learningScheduleId);
    return this.httpClient.get<LearningSchedule[]>(this.appSettings.ApiPath + "LearningSchedule/GetLearningScheduleById", {params:param1});
   }

   //methods for experience
   public GetExperienceById(experienceId: number):Observable<Experience[]>{
    let param1=new HttpParams().set('ExperienceId', experienceId);
    return this.httpClient.get<Experience[]>(this.appSettings.ApiPath + "Experience/GetExperienceById", {params:param1});
   }

   public AddNewExperienceForUser(experience: Experience,userId: number):Observable<Experience[]>{
    let param6=new HttpParams().set('userId', userId);
    return this.httpClient.post<Experience[]>(this.appSettings.ApiPath + "Experience/AddNewExperienceForUser",experience,{params:param6});
   }

   public GetAllExperiencesForUser(userId: number):Observable<Experience[]>{
    let param1=new HttpParams().set('userId', userId);
    return this.httpClient.get<Experience[]>(this.appSettings.ApiPath + "Experience/GetAllExperiencesForUser", {params:param1});
   }

   public UpdateExperience(experience: Experience):Observable<Experience[]>{
    return this.httpClient.post<Experience[]>(this.appSettings.ApiPath + "Experience/UpdateExperience", experience);
   }

   //methods for finishedStudy
   public GetFinishedStudyById(id: number):Observable<FinishedStudy[]>{
    let param1=new HttpParams().set('id', id);
    return this.httpClient.get<FinishedStudy[]>(this.appSettings.ApiPath + "FinishedStudy/GetFinishedStudyById", {params:param1});
   }

   public GetFinishedStudyByUserId(id: number):Observable<FinishedStudy[]>{
    let param1=new HttpParams().set('id', id);
    return this.httpClient.get<FinishedStudy[]>(this.appSettings.ApiPath + "FinishedStudy/GetFinishedStudyByUserId", {params:param1});
   }

   public GetFinishedStudyByProfileId():Observable<FinishedStudy[]>{
    return this.httpClient.get<FinishedStudy[]>(this.appSettings.ApiPath+'FinishedStudy/GetFinishedStudyByProfileId');
   }

   public UpdateFinishedStudy(finishedStudy:FinishedStudy):Observable<FinishedStudy[]>{
    return this.httpClient.put<FinishedStudy[]>(this.appSettings.ApiPath + "FinishedStudy/UpdateFinishedStudy", finishedStudy);
   }

   //methods for profile
   public GetProfileByUserId(userId:number):Observable<Profile[]>{
    let param1=new HttpParams().set('userId', userId);
    return this.httpClient.get<Profile[]>(this.appSettings.ApiPath+'Profile/GetProfileByUserId', {params:param1});
   }

   public UpdateProfileByUserId(profile:Profile, userId:number):Observable<Profile[]>{
    let param1=new HttpParams().set('userId', userId);  
    return this.httpClient.put<Profile[]>(this.appSettings.ApiPath+'Profile/UpdateProfileByUserId',profile, {params:param1});
   }

   public UpdateProfilePictureByUserId(profilePicture:string){
    let param1=new HttpParams().set('profilePicture',profilePicture);
    return this.httpClient.put<Profile[]>(this.appSettings.ApiPath+'Profile/UpdateProfilePictureByUserId',{params:param1});
   }

   public UpdateProfileDescriptionByUserId(profileDescription:string){
    let param1=new HttpParams().set('profileDescription',profileDescription);
    return this.httpClient.put<Profile[]>(this.appSettings.ApiPath+'Profile/UpdateProfileDescriptionByUserId',{params:param1});
   }

   //methods for user
   public GetAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.appSettings.ApiPath+'User/GetAllUsers');
   }

   public GetUserById(token:string):Observable<User>{
    var headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    var requestOptions={headers:headers};
    return this.httpClient.get<User>(this.appSettings.ApiPath+'User/GetUserById',requestOptions);
   }

   public AddUser(user:User, token:string){
      var headers =new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      var requestOptions={headers:headers};
      return this.httpClient.post(this.appSettings.ApiPath+'User/AddUser',user, requestOptions);
   }

   //methods for post
   public GetAllPostsSorted(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.appSettings.ApiPath+"Post/GetAllPostsSorted");
   }
}

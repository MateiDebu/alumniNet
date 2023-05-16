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
import { map } from 'rxjs/operators';
import { FinishedStudyDetailed } from "../models/finished-study-detailed.mode";


@Injectable({
    providedIn:'root'
})

export class DataService{
    constructor( private httpClient : HttpClient, private appSettings:AppSetting){
      
    }

    userToken:string='';
    setTokenUser(userToken:string){
      this.userToken=userToken;
    }

    setHttpHeader(){
      var headers =new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.userToken}`
      });
      var requestOptions={headers:headers};
      return requestOptions;
    }
    
   //methods for faculty
   public GetAllFaculties():Observable<Faculty[]>{
    return this.httpClient.get<Faculty[]>(this.appSettings.ApiPath+"Faculty/GetAllFaculties");
   }

   public GetFacultyById(facultyId: number):Observable<Faculty>{
    let param1=new HttpParams().set('id', facultyId);
    return this.httpClient.get<Faculty>(this.appSettings.ApiPath + "Faculty/GetFacultyById", {params:param1});
   }

   //methods for specialization
   public GetAllSpecializations(): Observable<Specialization[]>{
    return this.httpClient.get<Specialization[]>(this.appSettings.ApiPath+'Specialization/GetAllSpecializations');
   }

   public GetSpecializationsByFacultyId(facultyId:number):Observable<Specialization[]>{
    var httpOptions=this.setHttpHeader();
    let param1=new HttpParams().set('facultyId', facultyId);
    return this.httpClient.get<Specialization[]>(this.appSettings.ApiPath+'Specialization/GetSpecializationsByFacultyId',{ headers: httpOptions.headers, params: param1 });
   }

   public GetSpecializationsById(id:number):Observable<Specialization[]>{
    let param1=new HttpParams().set('id', id);
    return this.httpClient.get<Specialization[]>(this.appSettings.ApiPath+'Specialization/GetSpecializationsById',{params:param1});
   }

   //methods for studyProgram
   public GetAllStudyProgram():Observable<StudyProgram[]>{
    var httpOptions=this.setHttpHeader();
    return this.httpClient.get<StudyProgram[]>(this.appSettings.ApiPath+"StudyProgram/GetAllStudyPrograms",httpOptions);
   }

   public GetStudyProgramById(learningScheduleId: number):Observable<StudyProgram[]>{
    let param1=new HttpParams().set('learningScheduleId', learningScheduleId);
    return this.httpClient.get<StudyProgram[]>(this.appSettings.ApiPath + "StudyProgram/GetStudyProgramById", {params:param1});
   }

   //methods for learningSchedule
   public GetAllLearningSchedule():Observable<LearningSchedule[]>{
    var httpOptions=this.setHttpHeader();
    return this.httpClient.get<LearningSchedule[]>(this.appSettings.ApiPath+"LearningSchedule/GetAllLearningSchedules",httpOptions);
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

   public AddNewExperienceForUser(experience: Experience):Observable<Experience[]>{
    var httpOptions=this.setHttpHeader();
    return this.httpClient.post<Experience[]>(this.appSettings.ApiPath + "Experience/AddNewExperienceForUser",experience,httpOptions);
   }

   public GetAllExperiencesForUser():Observable<Experience[]>{
    var httpOptions=this.setHttpHeader();
    return this.httpClient.get<Experience[]>(this.appSettings.ApiPath + "Experience/GetAllExperiencesForUser", httpOptions);
   }

   public UpdateExperience(experience: Experience):Observable<Experience[]>{
    var httpOptions=this.setHttpHeader();
    return this.httpClient.post<Experience[]>(this.appSettings.ApiPath + "Experience/UpdateExperience", experience,httpOptions);
   }

   public DeleteExperience(experienceId:number){
    var httpOptions=this.setHttpHeader();
    let param1=new HttpParams().set('experienceId', experienceId);
    return this.httpClient.delete(this.appSettings.ApiPath +"Experience/DeleteExperience",{ headers: httpOptions.headers, params: param1 });
   }

   public UpdateExperienceCompanyName(id:number, company:string):Observable<Experience[]>{
    var httpOptions=this.setHttpHeader();
    const httpParams =new HttpParams({
      fromObject:{
        experienceId: id,
        companyName:company
      }
    });
    return this.httpClient.put<Experience[]>(this.appSettings.ApiPath+'Experience/UpdateExperienceCompanyName',null, {
      headers: httpOptions.headers,
      params: httpParams
    });
   }

   public UpdateExperienceJobTitle(id:number, job:string):Observable<Experience[]>{
    var httpOptions=this.setHttpHeader();
    const httpParams =new HttpParams({
      fromObject:{
        experienceId: id,
        jobTitle:job
      }
    });
    return this.httpClient.put<Experience[]>(this.appSettings.ApiPath+'Experience/UpdateExperienceJobTitle',null, {
      headers: httpOptions.headers,
      params: httpParams
    });
   }

   public UpdateExperienceStartDate(id:number, date:number):Observable<Experience[]>{
    var httpOptions=this.setHttpHeader();
    const httpParams =new HttpParams({
      fromObject:{
        experienceId: id,
        startDate:date
      }
    });
    return this.httpClient.put<Experience[]>(this.appSettings.ApiPath+'Experience/UpdateExperienceStartDate',null, {
      headers: httpOptions.headers,
      params: httpParams
    });
   }

   public UpdateExperienceEndDate(id:number, date:number):Observable<Experience[]>{
    var httpOptions=this.setHttpHeader();
    const httpParams =new HttpParams({
      fromObject:{
        experienceId: id,
        endDate:date
      }
    });
    return this.httpClient.put<Experience[]>(this.appSettings.ApiPath+'Experience/UpdateExperienceEndDate',null, {
      headers: httpOptions.headers,
      params: httpParams
    });
   }
   //methods for finishedStudy
   public GetFinishedStudyById(id: number):Observable<FinishedStudy[]>{
    let param1=new HttpParams().set('id', id);
    return this.httpClient.get<FinishedStudy[]>(this.appSettings.ApiPath + "FinishedStudy/GetFinishedStudyById", {params:param1});
   }

   public GetFinishedStudyByUserId():Observable<FinishedStudyDetailed[]>{
    var httpOptions=this.setHttpHeader();
    return this.httpClient.get<FinishedStudyDetailed[]>(this.appSettings.ApiPath + "FinishedStudy/GetFinishedStudyByUserId", httpOptions);
   }

   public UpdateFinishedStudySpecialization(finishedStudy:FinishedStudy):Observable<FinishedStudy[]>{
    var httpOptions=this.setHttpHeader();
    return this.httpClient.put<FinishedStudy[]>(this.appSettings.ApiPath + "FinishedStudy/UpdateFinishedStudySpecialization", finishedStudy,httpOptions);
   }

   public UpdateFinishedStudy(finishedStudy:FinishedStudy):Observable<FinishedStudy[]>{
    var httpOptions=this.setHttpHeader();
    return this.httpClient.put<FinishedStudy[]>(this.appSettings.ApiPath + "FinishedStudy/UpdateFinishedStudy", finishedStudy,httpOptions);
   }

   public AddFinishedStudy(finishedStudy:FinishedStudy){
    var httpOptions=this.setHttpHeader();
    return this.httpClient.post(this.appSettings.ApiPath + "FinishedStudy/AddFinishedStudy", finishedStudy,httpOptions);
   }

   public DeleteFinishedStudy(experienceId:number){
    var httpOptions=this.setHttpHeader();
    return this.httpClient.delete(this.appSettings.ApiPath+"FinishedStudy/DeleteFinishedStudy");
   }

   //methods for profile
   public GetProfileByUserId():Observable<Profile[]>{
    var httpOptions=this.setHttpHeader();
    return this.httpClient.get<Profile[]>(this.appSettings.ApiPath+'Profile/GetProfileByUserId', httpOptions);
   }

   public GetDescriptionAndPhotoByUserId():Observable<Profile>{
    var httpOptions=this.setHttpHeader();
    return this.httpClient.get<Profile>(this.appSettings.ApiPath+"Profile/GetDescriptionAndPhotoByUserId",httpOptions);
   }

   public UpdateProfileByUserId(profile:Profile):Observable<Profile[]>{
    var httpOptions=this.setHttpHeader();
    return this.httpClient.put<Profile[]>(this.appSettings.ApiPath+'Profile/UpdateProfileByUserId',profile,httpOptions);
   }

   public UpdateProfilePictureByUserId(profilePicture:string):Observable<any>{
    var httpOptions=this.setHttpHeader();
    return this.httpClient.put<any>(this.appSettings.ApiPath+'Profile/UpdateProfilePictureByUserId',{profilePicture},httpOptions);
   }

   public UpdateProfileDescriptionByUserId(description:string){
    var httpOptions=this.setHttpHeader();
    const httpParams =new HttpParams({
      fromObject:{
        profileDescription:description
      }
    });
    return this.httpClient.put(this.appSettings.ApiPath+'Profile/UpdateProfileDescriptionByUserId',null, {
      headers: httpOptions.headers,
      params: httpParams
    });
   }

   //methods for user
   public GetAllUsers():Observable<User[]>{
    var httpOptions=this.setHttpHeader();
    return this.httpClient.get<User[]>(this.appSettings.ApiPath+'User/GetAllUsers',httpOptions);
   }

   public UserValidation(id:string){
    var httpOptions=this.setHttpHeader();
    var params1=new HttpParams().set('userId', id);
    return this.httpClient.put<User>(this.appSettings.ApiPath+'User/UserValidation',{headers:httpOptions.headers,params:params1});
   }

   public GetUserById():Observable<User>{
    var httpOptions=this.setHttpHeader();
    return this.httpClient.get<User>(this.appSettings.ApiPath+'User/GetUserById',httpOptions);
   }

   public AddUser(user:User){
      var httpOptions=this.setHttpHeader();
      return this.httpClient.post(this.appSettings.ApiPath+'User/AddUser',user, httpOptions);
   }

   //methods for post
   public GetAllPostsSorted(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.appSettings.ApiPath+"Post/GetAllPostsSorted");
   }

   public GetPostsByUserId():Observable<Post[]>{
    var httpOptions=this.setHttpHeader();
    return this.httpClient.get<Post[]>(this.appSettings.ApiPath+"Post/GetPostsByUserId",httpOptions);
   }

   public AddNewPostForUser(newPost:Post){
    var httpOptions=this.setHttpHeader();
    return this.httpClient.post(this.appSettings.ApiPath+'Post/AddNewPostForUser',newPost, httpOptions);
   }

   public UpdatePostImage(id:number, image:string){
    var httpOptions=this.setHttpHeader();
    const httpParams =new HttpParams({
      fromObject:{
        postId: id,
        postImage:image
      }
    });
    return this.httpClient.put<Post[]>(this.appSettings.ApiPath+'Post/UpdatePostImage',null, {
      headers: httpOptions.headers,
      params: httpParams
    });
   }

   public UpdatePostTitle(id:number, title:string){
    var httpOptions=this.setHttpHeader();
    const httpParams =new HttpParams({
      fromObject:{
        postId: id,
        postTitle:title
      }
    });
    return this.httpClient.put<Post[]>(this.appSettings.ApiPath+'Post/UpdatePostTitle',null, {
      headers: httpOptions.headers,
      params: httpParams
    });
   }

   public UpdatePostText(id:number, text:string):Observable<Post[]>{
    var httpOptions=this.setHttpHeader();
    const httpParams =new HttpParams({
      fromObject:{
        postId: id,
        postText:text
      }
    });
    return this.httpClient.put<Post[]>(this.appSettings.ApiPath+'Post/UpdatePostText',null, {
      headers: httpOptions.headers,
      params: httpParams
    });
   }

   public DeletePost(postId:number){
    var httpOptions=this.setHttpHeader();
    var param1=new HttpParams().set('postId',postId);
    return this.httpClient.delete(this.appSettings.ApiPath+'Post/DeletePost', {headers: httpOptions.headers, params: param1 });
   }

   //methods for search users

   public GetFinishedStudyByProfileId(id:number):Observable<FinishedStudyDetailed[]>{
    var httpOptions=this.setHttpHeader();
    var params1=new HttpParams().set('profileId', id);
    return this.httpClient.get<FinishedStudyDetailed[]>(this.appSettings.ApiPath + "FinishedStudy/GetFinishedStudyByProfileId" 
    , {headers:httpOptions.headers,params:params1});
   }

   public GetExperienceByProfileId(id:number):Observable<Experience[]>{
    var httpOptions=this.setHttpHeader();
    var params1=new HttpParams().set('profileId', id);
    return this.httpClient.get<Experience[]>(this.appSettings.ApiPath + "Experience/GetExperienceByProfileId" 
    , {headers:httpOptions.headers,params:params1});
   }

   public GetPostsBySearchUserId(id:string):Observable<Post[]>
   {
    var httpOptions=this.setHttpHeader();
    var params1=new HttpParams().set('searchUserId', id);
    return this.httpClient.get<Post[]>(this.appSettings.ApiPath+"Post/GetPostsBySearchUserId",{headers:httpOptions.headers,params:params1});
   }

   public GetProfileByProfileId(id:number):Observable<Profile>{
    var httpOptions=this.setHttpHeader();
    var params1=new HttpParams().set('profileId', id);
    return this.httpClient.get<Profile>(this.appSettings.ApiPath+"Profile/GetProfileByProfileId",{headers:httpOptions.headers,params:params1});
   }

}

import { HttpClient, HttpParams} from "@angular/common/http";
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
    return this.httpClient.get<StudyProgram[]>(this.appSettings.ApiPath+"StudyProgram/GetAllStudyProgram");
   }

   public GetStudyProgramById(learningScheduleId: number):Observable<StudyProgram[]>{
    let param1=new HttpParams().set('learningScheduleId', learningScheduleId);
    return this.httpClient.get<StudyProgram[]>(this.appSettings.ApiPath + "StudyProgram/GetStudyProgramById", {params:param1});
   }

   //methods for learningSchedule
   public GetAllLearningSchedule():Observable<LearningSchedule[]>{
    return this.httpClient.get<LearningSchedule[]>(this.appSettings.ApiPath+"LearningSchedule/GetAllLearningSchedule");
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

   public AddNewExperienceForUser(experienceId: number, jobTitle: string, companyName: string, startData:number, endData:number, userId: number):Observable<Experience[]>{
    let param1=new HttpParams().set('ExperienceId', experienceId);
    let param2=new HttpParams().set('JobTitle',jobTitle);
    let param3=new HttpParams().set('CompanyName',companyName);
    let param4=new HttpParams().set('StartData',startData);
    let param5=new HttpParams().set('EndData',endData);
    let param6=new HttpParams().set('userId', userId);
    return this.httpClient.post<Experience[]>(this.appSettings.ApiPath + "Experience/AddNewExperienceForUser", {params:param1, param2,param3,param4,param5,param6});
   }

   public GetAllExperiencesForUser(userId: number):Observable<Experience[]>{
    let param1=new HttpParams().set('userId', userId);
    return this.httpClient.get<Experience[]>(this.appSettings.ApiPath + "Experience/GetAllExperiencesForUser", {params:param1});
   }

   public UpdateExperience(experienceId: number, jobTitle: string, companyName: string, startData:number, endData:number):Observable<Experience[]>{
    let param1=new HttpParams().set('ExperienceId', experienceId);
    let param2=new HttpParams().set('JobTitle',jobTitle);
    let param3=new HttpParams().set('CompanyName',companyName);
    let param4=new HttpParams().set('StartData',startData);
    let param5=new HttpParams().set('EndData',endData);
    return this.httpClient.post<Experience[]>(this.appSettings.ApiPath + "Experience/UpdateExperience", {params:param1, param2,param3,param4,param5});
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

   public UpdateFinishedStudy(finishedStudyId: number, specializationId: number, learningScheduleId: number, studyProgramId:number,year:number, profileId:number):Observable<FinishedStudy[]>{
    let param1=new HttpParams().set('FinishedStudyId', finishedStudyId);
    let param2=new HttpParams().set('SpecializationId',specializationId);
    let param3=new HttpParams().set('LearningScheduleId',learningScheduleId);
    let param4=new HttpParams().set('StudyProgramId',specializationId);
    let param5=new HttpParams().set('Year',year);
    let param6=new HttpParams().set('ProfileId',profileId);
    return this.httpClient.put<FinishedStudy[]>(this.appSettings.ApiPath + "FinishedStudy/UpdateFinishedStudy", {params:param1, param2,param3,param4,param5,param6});
   }

   //methods for profile
   public GetProfileByUserId(userId:number):Observable<Profile[]>{
    let param1=new HttpParams().set('userId', userId);
    return this.httpClient.get<Profile[]>(this.appSettings.ApiPath+'Profile/GetProfileByUserId', {params:param1});
   }

   public UpdateProfileByUserId(userId:number, profileId:number, profilePicture:string, description:string):Observable<Profile[]>{
    let param1=new HttpParams().set('ProfileId',profileId);
    let param2=new HttpParams().set('userId', userId);
    let param3=new HttpParams().set('ProfilePicture',profilePicture);
    let param4=new HttpParams().set('Description',description);
    return this.httpClient.put<Profile[]>(this.appSettings.ApiPath+'Profile/UpdateProfileByUserId', {params:param1,param2,param3,param4});
   }

   
   //methods for user
   public GetAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.appSettings.ApiPath+'User/GetAllUsers');
   }

   public GetUserById(id:number):Observable<User[]>{
    let param1=new HttpParams().set('id', id);
    return this.httpClient.get<User[]>(this.appSettings.ApiPath+'User/GetUserById',{params:param1});
   }
}

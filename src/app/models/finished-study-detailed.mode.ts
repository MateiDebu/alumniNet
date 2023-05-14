import { LearningSchedule } from "./learning-schedule.mode";
import { SpecializationFaculty } from "./specialization-faculties.mode";
import { StudyProgram } from "./study-program.mode";

export class FinishedStudyDetailed{
    finishedStudyId:number=0;
    specializationId:number=0;
    learningScheduleId:number=0;
    studyProgramId:number=0;
    year: number=0;
    learningSchedule?:LearningSchedule;
    specialization?:SpecializationFaculty;
    studyProgram?:StudyProgram;
    profileId:number=0;
}
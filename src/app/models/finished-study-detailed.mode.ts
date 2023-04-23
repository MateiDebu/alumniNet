import { LearningSchedule } from "./learning-schedule.mode";
import { Specialization } from "./specialization.mode";
import { StudyProgram } from "./study-program.mode";

export class FinishedStudyDetailed{
    finishedStudyId:number=0;
    specializationId:number=0;
    learningScheduleId:number=0;
    studyProgramId:number=0;
    year: number=0;
    learningSchedules:LearningSchedule[]=[];
    specializations:Specialization[]=[];
    studyPrograms:StudyProgram[]=[];
}
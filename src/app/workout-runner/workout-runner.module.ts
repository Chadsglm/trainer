import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondsToTimePipe } from './shared/seconds-to-time.pipe';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { ExerciseDescriptionComponent } from './exercise-description/exercise-description.component';
import { VideoPlayerComponent } from './video-player/video-player.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    WorkoutRunnerComponent
  ],
  declarations: [
    WorkoutRunnerComponent,
    ExerciseDescriptionComponent,
    VideoPlayerComponent,
    SecondsToTimePipe]
})
export class WorkoutRunnerModule { }

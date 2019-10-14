import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { WorkoutLogEntry, WorkoutHistoryTrackerService } from '../core/workout-history-tracker.service';

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.scss']
})
export class WorkoutHistoryComponent implements OnInit {

  history: Array<WorkoutLogEntry> = [];
  completed: boolean;

  constructor(
    private tracker: WorkoutHistoryTrackerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.history = this.tracker.getHistory();
  }

  goBack() {
    this.location.back();
  }

}

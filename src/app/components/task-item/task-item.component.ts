import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task | undefined;
  faTimes = faTimes;
}

// This was one way to get TS to stop complaining - but there must be a better way...
// @Input() task: Task = { text: 'blue', day: 'Monday', reminder: true };
// Ok, so instead I have gone to the 'task-item-component' html file and added 'optional chaining'
// See that file for what I changed.

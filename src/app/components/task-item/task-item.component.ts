import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {TASK} from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task! : TASK;

  @Output() onDeleteTask : EventEmitter<TASK> = new EventEmitter();

  showForm : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task : TASK) {
    this.onDeleteTask.emit(task);
  }

  toggleUpdateForm() {
    this.showForm = !this.showForm
  }

}

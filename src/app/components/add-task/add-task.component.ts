import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {TASK} from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask : EventEmitter<TASK> = new EventEmitter();

  text : string = "";
  day: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    if(!this.text){
      alert("Please fill the Task field")
    }else{
      const newTask = {
        text : this.text,
        day : this.day,
        status : false
      }
  
      this.onAddTask.emit(newTask);
  
      this.text = '';
      this.day ='';
    }
  }
}

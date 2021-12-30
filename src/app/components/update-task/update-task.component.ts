import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { TASK } from 'src/app/Task';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  @Input() showFormBoolean! : boolean;
  @Input() task! : TASK;

  @Output() onUpdateTask : EventEmitter <{[key:string]: any}> = new EventEmitter();

  text : string = "";
  day : string = "";
  status : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
   
    const updatedTask: {[key:string]: any} = {};
    if(this.text){
      updatedTask['text'] = this.text;
    }
    if(this.day){
      updatedTask['day'] = this.day;
    }
    if(this.status){
      if(this.status === 'pending'){
        updatedTask['status'] = false;
      }else{
        updatedTask['status'] = true;
      }
    }
    if(Object.keys(updatedTask).length !== 0){
      updatedTask['id'] = this.task.id;
      this.onUpdateTask.emit(updatedTask);
    }else{
      alert('You did not request updates')
    }

    this.text = '';
    this.day ='';
    this.status = '';
  }

}

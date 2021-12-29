import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  @Input() showFormBoolean! : boolean;

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
    console.log(updatedTask)
  }

}

import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {TASK} from '../../Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: TASK[] = [];
  p:any;
  searchText = ''
  showAddTask! : boolean;
  subscriptionAdd! : Subscription;
  showSearchTaskBar! : boolean;
  subscriptionSearch! : Subscription;

  constructor(private taskService:TaskService , private uiService:UiService) {
    this.subscriptionAdd = this.uiService.onToogleAddTaskForm().subscribe(
      (value) => (this.showAddTask = value)
    )
    this.subscriptionSearch = this.uiService.onToogleSearchTaskBar().subscribe(
      (value) => (this.showSearchTaskBar = value)
    )
   }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks
    })
  }

  addTask(task : TASK){
    this.taskService.addTask(task).subscribe(task=>(this.tasks.push(task)));
  }

  deleteTask(task : TASK){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter((t)=> t.id !== task.id)
    })
  }

  updateTask(updatedTask :  {[key:string]: any} ){
    this.taskService.updateTask(updatedTask).subscribe((task)=>{
      if(task.text){
        this.tasks.map((t)=>{
          if(t.id === updatedTask['id']){
              t.text = task.text;
          }
        })
      }
      if(task.day){
        this.tasks.map((t)=>{
          if(t.id === updatedTask['id']){
              t.day = task.day;
          }
        })
      }
      if(task.status){
        this.tasks.map((t)=>{
          if(t.id === updatedTask['id']){
              t.status = task.status;
          }
        })
      }else{
        this.tasks.map((t)=>{
          if(t.id === updatedTask['id']){
              t.status = task.status;
          }
        })
      }
     })
  }
}

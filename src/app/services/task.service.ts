import { Injectable } from '@angular/core';
import {TASK} from '../Task';
import { Observable  } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders ({
    'Content-type': 'application/json; charset=UTF-8'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://my-json-server.typicode.com/arisk1/my-json-server/tasks';

  constructor(private http:HttpClient) { }

  getTasks() :Observable<TASK[]> {
    return this.http.get<TASK []>(this.apiUrl);
  }

  addTask(task : TASK) :Observable<TASK>{
    return this.http.post<TASK>(this.apiUrl,task,httpOptions);
  }

  deleteTask(task:TASK) :Observable<TASK>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TASK>(url);
  }
}

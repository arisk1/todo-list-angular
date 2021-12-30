import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTaskForm : boolean = false;
  private showSearchTaskBar : boolean = false;
  private subjectAdd = new Subject<any>();
  private subjectSearch = new Subject<any>();


  constructor() { }

  toggleAddTaskForm() : void {
    this.showAddTaskForm = !this.showAddTaskForm;
    this.subjectAdd.next(this.showAddTaskForm);
  }

  toggleSearchTaskBar() : void {
    this.showSearchTaskBar = !this.showSearchTaskBar;
    this.subjectSearch.next(this.showSearchTaskBar);
  }

  onToogleSearchTaskBar(): Observable<any>{
    return this.subjectSearch.asObservable();
  }

  onToogleAddTaskForm(): Observable<any>{
    return this.subjectAdd.asObservable();
  }
}

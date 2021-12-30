import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subject,Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Todo List';
  showAddTask! : boolean;
  showSearchTaskBar! : boolean;
  subscriptionAdd! : Subscription;
  subscriptionSearch! : Subscription;


  constructor(private uiService : UiService) {
      this.subscriptionAdd = this.uiService.onToogleAddTaskForm().subscribe(
        (value) => (this.showAddTask = value)
      )
      this.subscriptionSearch = this.uiService.onToogleSearchTaskBar().subscribe(
        (value) => (this.showSearchTaskBar = value)
      )

   }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTaskForm();  
  }

  toggleSearchTaskBar() {
    this.uiService.toggleSearchTaskBar();  
  }

}

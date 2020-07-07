import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-lab';

  todos :Todo[]= [
    {
        task: "run",
        completed: false
    },
    {
        task: "walk",
        completed: false
    },
    {
        task: "crawl",
        completed: false
    },
    {
        task: "cry",
        completed: true
    },
    {
        task: "fly",
        completed: false
    },
];
}

interface Todo
{
    task: string;
    completed: boolean;
}




// ng serve
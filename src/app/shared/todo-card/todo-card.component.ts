import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent {
  @Input() cards: Todos[] = [];
}

interface Todos {
  title: string;
  content: string;
  dateCreated: Date;
  dateUpdated: Date;
}

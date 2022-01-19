import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent implements OnInit {
  @Input('card') card: any = [];

  ngOnInit() {}
}

interface Todos {
  title: string;
  content: string;
  dateCreated: Date;
  dateUpdated: Date;
}

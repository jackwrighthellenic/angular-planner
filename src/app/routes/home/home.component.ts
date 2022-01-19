import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/services/Utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private utils: Utils) {}

  dateGenerator() {
    return new Date(this.utils.randomRange(1627988143000, 1642594183000));
  }

  SAMPLE_TODOS = [
    {
      title: 'First todo!',
      content: "This is my first todo, and it's not very long at all.",
      dateCreated: new Date(this.dateGenerator()),
      dateUpdated: new Date(this.dateGenerator()),
    },
    {
      title: 'Second todo!',
      content: "This is my second todo, and it's not very long at all.",
      dateCreated: new Date(this.dateGenerator()),
      dateUpdated: new Date(this.dateGenerator()),
    },
    {
      title: 'Third todo!',
      content: "This is my third todo, and it's not very long at all.",
      dateCreated: new Date(this.dateGenerator()),
      dateUpdated: new Date(this.dateGenerator()),
    },
    {
      title: 'Fourth todo!',
      content: "This is my fourth todo, and it's not very long at all.",
      dateCreated: new Date(this.dateGenerator()),
      dateUpdated: new Date(this.dateGenerator()),
    },
  ];

  ngOnInit() {}
}

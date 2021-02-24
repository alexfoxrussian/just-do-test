import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'jd-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less'],
  host: {"class": "todos"},
  encapsulation: ViewEncapsulation.None
})
export class TodosComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public onClick() {
    localStorage.removeItem("loggedIn");
    window.location.href = "";
  }

}

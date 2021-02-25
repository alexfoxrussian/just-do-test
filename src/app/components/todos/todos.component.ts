import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'jd-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less'],
  host: {"class": "todos"},
  encapsulation: ViewEncapsulation.None
})
export class TodosComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public onClick() {
    localStorage.removeItem("loggedIn");
    this.router.navigate(['/']);
  }

}

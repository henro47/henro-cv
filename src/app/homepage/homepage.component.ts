import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css','../app.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  public innerWidth: any;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

}

import { Component, OnInit } from '@angular/core';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css','../app.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  title = "Skills" ;
  subtitle = "My skills";
  wrenchIco = faWrench;
  ngOnInit(): void {
  }

}

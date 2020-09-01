import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }
  uniTitle = "Tertiary Education";
  uniSubtitle ="North West University Potchefstroom Campus";
  schoolTitle ="Secondary Education";
  schoolSubtitle ="Sentraal High School";

  ngOnInit(): void {
  }

}

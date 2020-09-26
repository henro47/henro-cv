import { Component, OnInit } from '@angular/core';
export interface Data {
  position: number;
  name: string;
  info: string;
}

const UNI_DATA: Data[] = [
  {position: 1,name: 'Degree:', info: 'Baccalaureus in Scientiae in Information Technology (to be finished in 2020)'},
  {position: 2,name: 'Subjects passed in 2018:',info: '10 distinctions (First year – 2018)'},
  {position: 3,name: 'Subjects passed in 2019:', info: '11 distinctions (Second year - 2019)'}
];

const SCH_DATA: Data[] = [
  {position:1,name:'Highest Education:',info:'Matriculated'},
  {position:2,name:'Subjects passed:',info:'Grade'},
  {position:3,name:'Afrikaans', info:'69%'},
  {position:4,name:'English', info:'76%'},
  {position:5,name:'Mathematics', info:'66%'},
  {position:6,name:'Life Orientation', info:'78%'},
  {position:7,name:'Engineering graphics and Design', info:'84%'},
  {position:8,name:'Information Technology', info:'73%'},
  {position:9,name:'Physical Sciences', info:'73%'}
];

const AA_DATA: Data[] = [
  {position:1,name:'2018:',info:'North West University Academic Merit Bursary'},
  {position:2,name:'2019:',info:'Golden Key International Honour Society Member'},
  {position:3,name:'',info:'Academic Top 10 De Wilgers Manskoshuis (1st)'},
  {position:4,name:'',info:'North West University Academic Merit Bursary'}
];

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css','../app.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }
  uniTitle = "Tertiary Education";
  uniSubtitle ="North West University Potchefstroom Campus";
  schoolTitle ="Secondary Education";
  schoolSubtitle ="Sentraal High School";
  achievementsTitle ="Academic Achievements";
  achievementSubtitle="My Academic Achievements";


  displayedColumns: string[] = ['name', 'info'] ;
  uniDataSource = UNI_DATA;
  schoolDataSource = SCH_DATA;
  adtionalAcademics = AA_DATA;
  ngOnInit(): void {
  }

}

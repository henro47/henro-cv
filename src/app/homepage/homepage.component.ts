import { Component, OnInit } from '@angular/core';
import { faCodeBranch, faHome, faGraduationCap, faStream, faChessRook, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css','../app.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  public innerWidth: any;
  homeIco = faHome;
  skillsIco = faCodeBranch;
  eduIco = faGraduationCap;
  workIco = faStream;
  hobbyIco = faChessRook;
  projectIco = faProjectDiagram;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }


}

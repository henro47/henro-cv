import { Component, OnInit } from '@angular/core';
import {faBook, faDesktop, faGolfBall, faHammer, faMusic} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css','../app.component.css']
})
export class HobbiesComponent implements OnInit {

  constructor() { }

  woodTitle = "Woodworking" ;
  woodSubtitle = "Things I enjoy about working with wood"

  musicTitle = "Music" ;
  musicSubtile = "Things I enjoy about music" ;

  sportTitle = "Sport" ;
  sportSubTitle = "Things I enjoy about sport" ;

  techTitle = "Technology" ;
  techSubtitle = "Things I enjoy about technology" ;

  readTitle = "Reading" ;
  readSubTitle = "Things I enjoy about reading" ;

  faGolfIco = faGolfBall;
  faTechIco = faDesktop;
  faMusicIco = faMusic;
  faWood = faHammer;
  faBook = faBook;
  ngOnInit(): void {
  }

}

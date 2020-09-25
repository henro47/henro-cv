import { Component, OnInit } from '@angular/core';
import { faClone, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css','../app.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  title = "Projects" ;
  subtitle = "Projects I've created."
  driveSafe = "Download Drive Safe" ;
  playIco = faPlay ;
  projectIco = faClone;

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

}

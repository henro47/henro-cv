import { Component, OnInit } from '@angular/core';
import {faAddressBook,faBookmark, faDownload, faCode, faHome, faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css','../app.component.css']
})
export class HomeContentComponent implements OnInit {

  constructor() { }
  title= 'HENRO POTGIETER' ;
  subtitle= 'Final Year'  ;
  subtitleContinue= 'information Technology Student';
  location= 'De Wilgers Manskoshuis, NWU Potchefstroom Campus';
  number="+27 79 923 1400";
  emailLine="henro47@gmail.com";
  linkedIn='LinkedIn';
  github='Github'

  titleRight= 'ABOUT' ;
  subtitleRight ='A little about me.';

  titleCarreer ="CARREER";
  subtitleCarrer="Goal Objective";

  titleSocial ="SOCIAL" ;
  subtitleSocial="My Social Accounts";

  marker= faHome;
  addressBook = faAddressBook;
  email = faEnvelope;
  bookmark = faBookmark;
  downloadIco = faDownload;
  avatar = faCode;

  ngOnInit(): void {
  }

}

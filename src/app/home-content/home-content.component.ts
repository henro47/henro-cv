import { Component, OnInit } from '@angular/core';
import {faMarker, faAddressBook, faMailBulk} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  constructor() { }
  title= 'HENRO POTGIETER' ;
  subtitle= 'Final Year Information Technology Student' ;
  location= 'De Wilgers Manskoshuis, NWU Potchefstroom Campus';
  number="+27 79 923 1400";
  emailLine="henro47@gmail.com";
  marker= faMarker;
  addressBook = faAddressBook;
  email = faMailBulk;

  ngOnInit(): void {
  }

}

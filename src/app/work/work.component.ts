import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css','../app.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }
  workPanelTitle ="Work Experience" ;
  workOneTitle ="Assistant";
  workOneSub ="@Nort West University Potchefstroom Campus";
  workTwoTitle ="Internship";
  workTwoSub ="@Movation (Pty) Ltd.";
  workThreeTitle ="Developer";
  workThreeSub="@Linx-AS LLC.";
  ReferencesTitle="References";
  refCardTitle="Employer";
  refCardOneSub ="Mr. Dirk Snyman"; 
  refCardTwoSub ="Mr Kenneth Jackson"; 
  refCardThreeSub ="Mr. Werner Simpson"; 


  ngOnInit(): void {
  }

}

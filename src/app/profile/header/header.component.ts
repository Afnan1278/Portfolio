import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(arg){
    if (arg == 1){
      document.getElementById('about').scrollIntoView(true);
    }
    if (arg == 2){
      document.getElementById('experience').scrollIntoView(true);
    }
    if (arg == 3){
      document.getElementById('projects').scrollIntoView(true);
    }
    if (arg == 4){
      document.getElementById('skill').scrollIntoView(true);
    }if (arg == 5){
      document.getElementById('education').scrollIntoView(true);
    }
    if (arg == 6){
      document.getElementById('contact').scrollIntoView(true);
    }
    

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(document).ready(function() {
	
    //   $('.card').delay(1800).queue(function(next) {
    //     $(this).removeClass('hover');
    //     $('a.hover').removeClass('hover');
    //     next();
    //   });
    // });
  }

}

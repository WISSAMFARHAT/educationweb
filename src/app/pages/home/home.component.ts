import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  slides = [
    { img: 'assets/images/avatar1.jpg',desc:'loeran' },
    { img: 'assets/images/avatar2.jpg',desc:'loeran' },
    { img: 'assets/images/avatar3.jpg',desc:'loeran' },
    { img: 'assets/images/avatar4.jpg',desc:'loeran' },
    { img: 'assets/images/avatar5.jpg',desc:'loeran' },
    { img: 'assets/images/avatar6.jpg',desc:'loeran' },
    { img: 'assets/images/avatar7.jpg',desc:'loeran' },

  ];  
  

  slideConfig = { slidesToShow: 2, slidesToScroll: 2 };

  ngOnInit(): void {
  }

}

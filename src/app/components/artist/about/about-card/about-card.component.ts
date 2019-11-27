import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent implements OnInit {
  @Input() about: any
  
  constructor() { }

  ngOnInit() {
  }

}

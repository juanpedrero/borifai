import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public abouts: any[];
  
  constructor(public musicService: MusicService) {
    this.abouts = musicService.artists
   }

  ngOnInit() {
  }

}

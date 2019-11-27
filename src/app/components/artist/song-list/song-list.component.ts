import { Component, Input, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';


@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  @Input() songs: any

  constructor(public musicService: MusicService) { }

  ngOnInit() {
  }

}

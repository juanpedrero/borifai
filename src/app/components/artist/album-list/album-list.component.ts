import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
// import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  
  public albumList: any[];

  constructor(public musicService: MusicService) { }

  ngOnInit() {
    this.albumList = this.musicService.getAlbumImgById()
  }

}
    
  

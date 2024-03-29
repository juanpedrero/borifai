import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
// import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  
  public albumList: any[];
  @Output() changeAlbum = new EventEmitter<any>();
  constructor(public musicService: MusicService) {
    this.albumList = musicService.albums
   }

  ngOnInit() {
/*     this.albumList = this.musicService.getAlbumImgById()
 */  }
 changeAlbumSelected(idAlbum) {
   this.changeAlbum.emit(idAlbum);
 }
}
    
  

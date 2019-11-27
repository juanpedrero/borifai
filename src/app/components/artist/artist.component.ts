import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  public songsByAlbum: any[];
  public songs: any[];
  /* songsByAlbum = [] */
  /* songs = [] */
  constructor(public musicService: MusicService) { 
    this.songs = musicService.songs;
  }

  ngOnInit() {
    // TODO LLamar al servicio de canciones y traer las canciones a la variable
    
  }
  changeAlbumSelected(idAlbum){
    debugger
     this.songsByAlbum = this.songs.filter(s => s.albumId === idAlbum );
     // SongsByAlbum se actualiza cuando cambia el id album
  } 
}

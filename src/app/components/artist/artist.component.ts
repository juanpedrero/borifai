import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  songsByAlbum = []
  songs = []
  constructor() { }

  ngOnInit() {
    // TODO LLamar al servicio de canciones y traer las canciones a la variable
    // songs
  }
  changeAlbumSelected(idAlbum){
     this.songsByAlbum = this.songs.filter(s => s.idArtist === idAlbum )
     // SongsByAlbum se actualiza cuando cambia el id album
  } 
}

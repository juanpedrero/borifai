import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  songs = [
    {
      name_song: 'Gul lAbi',
      time: `3:58`,
      name_album: `Acid Arab`,
    },
    {
      name_song: 'Macarena',
      time: `2:58`,
      name_album: `Acid Arab`,
    },
    {
      name_song: 'Asereje',
      time: `1:58`,
      name_album: `Retamal`,
    },
    {
      name_song: 'Bohemian Rapsody',
      time: `7:58`,
      name_album: `Forever Alone`,
    },
    {
      name_song: 'Rosalia',
      time: `3:20`,
      name_album: `Mujer contra mujer`,
    },
    {
      name_song: 'Gul lAbi',
      time: `3:58`,
      name_album: `Acid Arab`,
    },
    {
      name_song: 'Gul lAbi',
      time: `3:58`,
      name_album: `Acid Arab`,
    },
    {
      name_song: 'Gul lAbi',
      time: `3:58`,
      name_album: `Acid Arab`,
    },
    {
      name_song: 'Gul lAbi',
      time: `3:58`,
      name_album: `Acid Arab`,
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

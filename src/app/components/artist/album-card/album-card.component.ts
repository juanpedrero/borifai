import { Component, OnInit, Input } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';


@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  
  @Input() albumes: any
  // FALTA CREAR MODELO DE ALBUMES

  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }

}

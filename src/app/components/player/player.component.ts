import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  private audioToPlay: HTMLAudioElement;
  private audioContext: AudioContext;

  // Buttons
  private btnPlay: HTMLElement;
  private btnPrevious: HTMLElement;
  private btnNext: HTMLElement;
  private btnShuffle: HTMLElement;
  private btnRepeat: HTMLElement;
  private btnVolume: HTMLElement;

  // Icons
  private imgPlayPause: HTMLMediaElement;
  private imgVolume: HTMLMediaElement;
  private iconPlay: string;
  private iconPause: string;
  private iconVolumeUp: string;
  private iconMute: string;

  // Volume
  private formerVolume: number;
  private volumeBar: HTMLElement;

  // Duration
  private timeBar: HTMLElement;
  private totalTime: number;

  // Playlist
  private audioPlaying: number;
  private playlist: Array<string>


  constructor(
    private musicService: MusicService,
  ) { }

  // Music
  private artists: Array<Object>
  private albums: Array<Object>
  private songs: Array<Object>

  ngOnInit() {
    this.audioToPlay = document.querySelector('audio');
    this.audioContext = new AudioContext();

    this.btnPlay = document.getElementById('controlPlay');
    this.btnPrevious = document.getElementById('controlPrevious');
    this.btnNext = document.getElementById('controlNext');
    this.btnShuffle = document.getElementById('controlShuffle');
    this.btnRepeat = document.getElementById('controlRepeat');
    this.btnVolume = document.getElementById('controlVolume');

    this.imgPlayPause = document.querySelector('#imgPlayPause');
    this.imgVolume = document.querySelector('#imgVolume');
    this.iconPlay = '../../../assets/svg/play-solid.svg';
    this.iconPause = '../../../assets/svg/pause-solid.svg';
    this.iconVolumeUp = '../../../assets/svg/volume-up-solid.svg';
    this.iconMute = '../../../assets/svg/volume-mute-solid.svg';

    this.audioPlaying = 0;

    this.formerVolume = 1;
    this.volumeBar = document.getElementById('volumeBar');
    this.volumeBar.style.width = this.audioToPlay.volume * 100 + '%';
    this.timeBar = document.getElementById('timeBar');
    this.timeBar.style.width = '0';

    this.artists = this.musicService.getArtistList();
    this.albums = this.musicService.getAlbumList();
    this.songs = this.musicService.getSongList();

    this.playlist = [];
    this.songs.forEach(song => {
      this.playlist.push(song['path'])
    });
  }

  loadData() {
    this.totalTime = this.audioToPlay.duration;
  }

  controlPlay(): void {
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    if (this.btnPlay.dataset.playing === 'false') {
      this.audioToPlay.play();
      this.imgPlayPause.src = this.iconPause;
      this.btnPlay.dataset.playing = 'true';
      this.audioToPlay.ontimeupdate = () => {
        this.timeBar.style.width = this.audioToPlay.currentTime / this.audioToPlay.duration * 100 + '%';
        return this.audioToPlay.currentTime;
      }
      this.audioToPlay.onended = () => {
        this.imgPlayPause.src = this.iconPlay;
        this.btnPlay.dataset.playing = 'false';
        this.controlNext();
      }
    } else {
      this.audioToPlay.pause();
      this.imgPlayPause.src = this.iconPlay;
      this.btnPlay.dataset.playing = 'false';
    }
  }

  controlNext(): void {
    this.audioToPlay.pause();
    this.btnPlay.dataset.playing = 'false';
    this.audioPlaying++;
    if (this.audioPlaying === this.playlist.length) {
      this.audioToPlay.src = this.playlist[0];
      this.audioPlaying = 0;
    } else {
      this.audioToPlay.src = this.playlist[this.audioPlaying];
    }
    this.controlPlay()
  }

  controlPrevious(): void {
    this.audioToPlay.pause();
    this.btnPlay.dataset.playing = 'false';
    this.audioPlaying--;
    if (this.audioPlaying < 0) {
      this.audioToPlay.src = this.playlist[(this.playlist.length) - 1];
      this.audioPlaying = (this.playlist.length) - 1;
    } else {
      this.audioToPlay.src = this.playlist[this.audioPlaying];
    }
    this.controlPlay()
  }

  switchVolume(): void {
    if (this.btnVolume.dataset.sound === 'false') {
      this.formerVolume = this.audioToPlay.volume;
      this.audioToPlay.volume = 0;
      this.imgVolume.src = this.iconMute;
      this.btnVolume.dataset.sound = 'true';
    } else {
      this.audioToPlay.volume = this.formerVolume;
      this.imgVolume.src = this.iconVolumeUp;
      this.btnVolume.dataset.sound = 'false';
    }
    this.volumeBar.style.width = this.audioToPlay.volume * 100 + '%';
  }

  setVolume($event): void {
    this.audioToPlay.volume = parseFloat($event.target.value);
    this.volumeBar.style.width = parseFloat($event.target.value) * 100 + '%';
  }

  setTime($event): void {
    this.audioToPlay.currentTime = parseFloat($event.target.value) * (this.audioToPlay.duration / 100);
    this.timeBar.style.width = parseFloat($event.target.value) + '%';
  }
}

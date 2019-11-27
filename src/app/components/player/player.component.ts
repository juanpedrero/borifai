import { Component, OnInit } from '@angular/core';

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

  //
  private audioPlaying: number;
  private playlist: Array<string>

  constructor() {

  }

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

    this.playlist = [
      '../../../assets/music/queen/BohemianRhapsody.mp3',
      '../../../assets/music/queen/DontStopMeNow.mp3',
      '../../../assets/music/queen/IWantToBreakFree.mp3',
      '../../../assets/music/queen/KillerQueen.mp3',
      '../../../assets/music/queen/SomebodyToLove.mp3',
    ];
    //this.audioPlaying = this.playlist.indexOf(this.audioToPlay.src);
    this.audioPlaying = 0;

    this.formerVolume = 1;
    this.volumeBar = document.getElementById('volumeBar');
    this.volumeBar.style.width = this.audioToPlay.volume * 100 + '%';
    this.timeBar = document.getElementById('timeBar');
    this.timeBar.style.width = '0';
    this.totalTime = 0;
  }

  controlPlay(): void {
    this.totalTime = this.audioToPlay.duration;
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
      }
    } else {
      this.audioToPlay.pause();
      this.imgPlayPause.src = this.iconPlay;
      this.btnPlay.dataset.playing = 'false';
    }
  }

  controlNext():void {
    this.audioToPlay.pause();
    this.btnPlay.dataset.playing = 'false';
    this.audioPlaying++;
    this.audioToPlay.src = this.playlist[this.audioPlaying];
    this.controlPlay()
  }

  controlPrevious():void {
    this.audioToPlay.pause();
    this.btnPlay.dataset.playing = 'false';
    this.audioPlaying--;
    this.audioToPlay.src = this.playlist[this.audioPlaying];
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

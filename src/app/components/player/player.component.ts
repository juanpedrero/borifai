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
  private imgPlayPause: HTMLMediaElement;
  private btnPrevious: HTMLElement;
  private btnNext: HTMLElement;
  private btnShuffle: HTMLElement;
  private btnRepeat: HTMLElement;
  private btnVolume: HTMLElement;
  private imgVolume: HTMLMediaElement;
  private volumeBar: HTMLElement;

  constructor() {

  }

  ngOnInit() {
    this.audioToPlay = document.querySelector('audio');
    this.audioContext = new AudioContext();
    this.btnPlay = document.getElementById('controlPlay');
    this.imgPlayPause = document.querySelector('#imgPlayPause');
    this.btnPrevious = document.getElementById('controlPrevious');
    this.btnNext = document.getElementById('controlNext');
    this.btnShuffle = document.getElementById('controlShuffle');
    this.btnRepeat = document.getElementById('controlRepeat');
    this.btnVolume = document.getElementById('controlVolume');
    this.imgVolume = document.querySelector('#imgVolume');
    this.volumeBar = document.getElementById('volumeBar');
    this.volumeBar.style.width = this.audioToPlay.volume * 100 + '%';
  }

  controlPlay(): void {
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    if (this.btnPlay.dataset.playing === 'false') {
      this.audioToPlay.play();
      this.imgPlayPause.src = '../../../assets/svg/pause-solid.svg';
      this.btnPlay.dataset.playing = 'true';
    } else {
      this.audioToPlay.pause();
      this.imgPlayPause.src = '../../../assets/svg/play-solid.svg';
      this.btnPlay.dataset.playing = 'false';
    }
  }

  switchVolume():void {
    if (this.btnVolume.dataset.playing === 'false') {
      this.audioToPlay.volume = 0;
      this.imgVolume.src = '../../../assets/svg/volume-mute-solid.svg';
      this.btnVolume.dataset.playing = 'true';
    } else {
      this.audioToPlay.volume = 1;
      this.imgVolume.src = '../../../assets/svg/volume-up-solid.svg';
      this.btnVolume.dataset.playing = 'false';
    }
    this.volumeBar.style.width = this.audioToPlay.volume * 100 + '%';
  }

  controlVolume($event):void {
    this.audioToPlay.volume = parseFloat($event.target.value);
    this.volumeBar.style.width = this.audioToPlay.volume * 100 + '%';
  }
}

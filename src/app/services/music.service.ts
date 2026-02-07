import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private audio!: HTMLAudioElement;

  init(audio: HTMLAudioElement) {
    this.audio = audio;
    this.audio.volume = 0.4;
  }

  play() {
    if (!this.audio) return;

    this.audio.play().catch(() => {});
    sessionStorage.setItem('musicStarted', 'true');
  }

  autoPlayIfAllowed() {
    if (!this.audio) return;

    const started = sessionStorage.getItem('musicStarted');
    if (started === 'true') {
      this.audio.play().catch(() => {});
    }
  }
}

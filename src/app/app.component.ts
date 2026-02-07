import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicService } from './services/music.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  title = 'Surprise';

  // 🎵 reference to background music
  @ViewChild('bgMusic') bgMusic!: ElementRef<HTMLAudioElement>;

  constructor(private musicService: MusicService) {}

  ngAfterViewInit(): void {
    // initialize audio once
    this.musicService.init(this.bgMusic.nativeElement);

    // 🔑 auto-play ONLY if user already clicked YES before
    this.musicService.autoPlayIfAllowed();
  }
}

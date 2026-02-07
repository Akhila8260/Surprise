import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MusicService } from '../../services/music.service'; // 🎵 ADDED

@Component({
  selector: 'app-ask',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent implements AfterViewInit {

  x = 0;
  y = 0;

  // 🔒 store initial parallel position
  initialX = 0;
  initialY = 0;

  hasHovered = false;

  noTexts = [
    'No 😒',
    'Are you sure? 😢',
    'Think again 🥺',
    'kut dungi😎',
    'Please don’t 💔',
    'Hehe nope 😝',
    'Rone lagunga😭',
    'meri cute monku choose yes😎',
    'chechibi janichu na! 😤',
    'Ranga🌈'

  ];

  noIndex = 0;
  noText = this.noTexts[0];

  @ViewChild('yesBtn', { static: false })
  yesBtn!: ElementRef<HTMLButtonElement>;

  constructor(
    private router: Router,
    private musicService: MusicService // 🎵 ADDED
  ) {}

  // ✅ always set parallel position after refresh/load
  ngAfterViewInit() {
    setTimeout(() => {
      const yesEl = this.yesBtn.nativeElement;
      const yesRect = yesEl.getBoundingClientRect();

      const parent = yesEl.offsetParent as HTMLElement;
      const parentRect = parent.getBoundingClientRect();

      this.initialX =
        yesRect.left -
        parentRect.left +
        yesRect.width +
        15;

      this.initialY =
        yesRect.top -
        parentRect.top;

      // 🔑 force NO to parallel position on every refresh
      this.x = this.initialX;
      this.y = this.initialY;
    }, 0);
  }

  // ✅ move ONLY after hover
  moveNo() {
    this.hasHovered = true;

    const cardWidth = 380;
    const cardHeight = 520;

    const btnWidth = 120;
    const btnHeight = 45;
    const padding = 20;

    const maxX = cardWidth - btnWidth - padding;
    const maxY = cardHeight - btnHeight - padding;

    this.x = Math.random() * maxX;
    this.y = Math.random() * maxY;

    this.noIndex = (this.noIndex + 1) % this.noTexts.length;
    this.noText = this.noTexts[this.noIndex];
  }

  yes() {
    this.musicService.play(); // 🎵 START MUSIC (ADDED)
    this.router.navigate(['/letter']);
  }
}

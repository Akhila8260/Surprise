import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  msg = '';

  constructor(private router: Router) {}

  wrong() {
    this.msg = 'Oops 😝 Try again, my love!';
  }

  right() {
    this.router.navigate(['/final']);
  }
}

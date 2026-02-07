import { Routes } from '@angular/router';
import { AskComponent } from './pages/ask/ask.component';
import { LetterComponent } from './pages/letter/letter.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { FinalComponent } from './pages/final/final.component';
import { GiftsComponent } from './pages/gifts/gifts.component';

export const routes: Routes = [
  { path: '', component: AskComponent },
  { path: 'letter', component: LetterComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'final', component: FinalComponent },
  { path: 'gifts', component: GiftsComponent },

  // fallback safety
  { path: '**', redirectTo: '' }
];

import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss']
})
export class GiftsComponent {
  memoryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.memoryForm = this.fb.group({
      message: ['']
    });
  }

  saveMemory() {
    console.log(this.memoryForm.value);
  }
}

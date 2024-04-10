import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MathActivityComponent } from './math-activity/math-activity.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MathActivityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'math-app';
}

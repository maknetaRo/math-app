import { Component } from '@angular/core';

@Component({
  selector: 'math-activity',
  standalone: true,
  imports: [],
  templateUrl: './math-activity.component.html',
  styleUrl: './math-activity.component.scss',
})
export class MathActivityComponent {
  mathExamples: any[] = [];

  ngOnInit() {
    this.generateMathActivity();
  }

  generateMathActivity() {
    let operand1, operand2, operator, result;
    for (let i = 0; i < 20; i++) {
      operand1 = Math.floor(Math.random() * 10) + 1;
      operand2 = Math.floor(Math.random() * 10) + 1;
      operator = '+';
      result = operand1 + operand2;
      this.mathExamples.push({ operand1, operand2, operator, result });
    }
  }
}

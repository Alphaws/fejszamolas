import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class DisplayPage implements OnInit {

  route: any = inject(ActivatedRoute);
  router: any = inject(Router);

  ready: boolean = false;

  numberCount!: number;
  displayTime!: number;
  digitLength!: number;
  numbers: number[] = [];
  currentIndex: number = 0;
  currentNumber!: number | null;
  userAnswer: string = '';

  constructor() { }

  ngOnInit() {
    this.ready = false;
    this.currentIndex = 0;
    this.numbers = [];
    this.route.queryParams.subscribe((params: any) => {
      this.numberCount = +params['numberCount'];
      this.displayTime = +params['displayTime'];
      this.digitLength = +params['digitLength'];
      this.generateNumbers();
      this.showNextNumber();
    });
  }

  generateNumbers() {
    for (let i = 0; i < this.numberCount; i++) {
      const number = Math.floor(Math.random() * Math.pow(10, this.digitLength));
      this.numbers.push(number);
    }
  }

  showNextNumber() {
    if (this.currentIndex < this.numbers.length) {
      this.currentNumber = this.numbers[this.currentIndex];
      setTimeout(() => {
        this.currentNumber = null;
        setTimeout(() => {
          this.currentIndex++;
          this.showNextNumber();
        }, 500);
      }, this.displayTime * 1000);
    } else {
      this.ready = true;
    }
  }

  back() {
    this.router.navigate(['/']).then();
  }

  restart() {
    this.ngOnInit();

  }
}

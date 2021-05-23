import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "Click me!";
  i = 0;
  spinnerMode: ProgressSpinnerMode = "determinate";
  x = "accent"
  btnEnabled = true;
  value = 0;
  
  constructor() { }
  
  
  ngOnInit(): void {
  }

  save() {
    console.log("click");
  }

  inc() {
    this.i += 1;
    this.buttonName = `This was clicked ${this.i} times.`;
  }

  disabled() {
    this.btnEnabled = false;
    // this.spinnerMode = "indeterminate";
    let total = 0;
    let timer = setInterval(() => {
      total += 200;
      this.value = total*100/3000;
    },200);
    setTimeout(() => {
      clearInterval(timer)
      this.btnEnabled = true
      this.value = 0
    },3500);
    // setTimeout(() => {
    //   this.btnEnabled = true;
    //   this.spinnerMode = "determinate";
    // }, 3000);
  }

}

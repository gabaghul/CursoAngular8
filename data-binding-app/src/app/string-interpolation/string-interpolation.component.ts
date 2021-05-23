import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstName = 'John';
  lastName = 'Doe';

  person = {
    age: 20,
    sex: "Male",
    address: "Route 100",
    height: "1.75m",
    favoriteFood: "Pizza"
  }

  constructor() { }

  ngOnInit(): void {
  }

}

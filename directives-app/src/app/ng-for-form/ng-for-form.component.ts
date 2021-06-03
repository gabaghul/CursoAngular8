import { Component, OnInit } from '@angular/core';
import { City } from '../model/city';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string = ""
  address: string = ""
  phone: string = ""
  city: City = new City("","")
  age: number = 0

  clients = [] as any

  cities : City[] = [
    new City("São Paulo","SP"),
    new City("Porto Alegre","RS"),
    new City("Belo Horizonte","MG"),
    new City("Rio de Janeiro","RJ")
  ]

  constructor() { }

  ngOnInit(): void {

  }

  save() {
    this.clients.push({
      name: this.name,
      address: this.address,
      city: this.city,
      phone: this.phone,
      age: this.age
    })
    this.cancel()
    console.log(this.clients)
  }

  cancel() {
    this.name = ""
    this.address = ""
    this.city = new City("","")
    this.phone = ""
    this.age = 0
  }

  delete(client : Object) {
    this.clients.pop(client)
  }

}

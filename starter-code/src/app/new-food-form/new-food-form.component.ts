import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-food-form',
  templateUrl: './new-food-form.component.html',
  styleUrls: ['./new-food-form.component.css']
})
export class NewFoodFormComponent implements OnInit {

  // onAddFood = custom even we invented that emits an Object
  @Output() onAddFood = new EventEmitter<Object>();
  newFoodName: string = "Example";
  newFoodCalories: number = 250;
  newFoodImage: string;

  constructor() { }

  ngOnInit() {}

  submitForm(myForm) {

    const newFood = {
      name: this.newFoodName,
      calories: this.newFoodCalories,
      image: this.newFoodImage,
      quantity: 0
    };

    console.log(myForm);

    // triggers our custom onAddFood event that we created
    this.onAddFood.emit(newFood);
  }

}

import { Component, OnInit } from '@angular/core';

//        vvv   can be anything
import foodsList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

//   ========================================
//   |                                       |
  foods: Object[];                      //   |
  myList: {                             //   |
    name: string,                       //   |
    calories: number,                   //   |
    image: string,                      //   |
    quantity: number,                   //   |
  }[] = [];                             //   |
  pattern: string;                      //   |
  isEditing: boolean = false;           //   |  this.foods
  newFoodName: string = "Example Name"; //   |  refers to
  newFoodCalories: number = 250;        //   |  foods
  newFoodImage: string;                 //   |
  quantity: number;                     //   |
  totalCalories: number = 0;            //   |
//                                           |
  constructor() { }                     //   |
//                                           |
  ngOnInit() {                          //   |
//         ===================================
//         |
    this.foods = foodsList;
  }

  enableUserToAddFood() {
    this.isEditing = !this.isEditing;
  }

  newFood(foodForm) {
    const newFood = {
      name: this.newFoodName,
      calories: this.newFoodCalories,
      image: this.newFoodImage,
      quantity: 0
    }

    this.foods.unshift(newFood);

    this.isEditing = false;
    this.newFoodName = "";
    this.newFoodCalories = null;
    this.newFoodImage = "";
  }

  addToMyList(food, quantityInput) {
    const existingFood = this.myList.find( item => item.name === food.name)
    const quantity = Number(quantityInput.value)

    if (existingFood) {
      existingFood.quantity = quantity;
    }
    else {
      food.quantity += quantity;
      this.myList.push(food);
    }

    this.totalCalories += (food.calories * quantity);
    this.quantity = 1;
  }

}

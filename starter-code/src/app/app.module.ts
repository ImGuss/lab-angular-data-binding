// every time you make a new component manually, you have to add it to declarations.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodSearchPipe } from './food-search.pipe';
import { MyFoodsComponent } from './my-foods/my-foods.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodSearchPipe,
    MyFoodsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

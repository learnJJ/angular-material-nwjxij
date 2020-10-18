import { Component, OnInit } from "@angular/core";
import { Dish } from "../shared/dish";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  constructor() {}

  dishes: Dish = [
    {
      id: "1",
      name: "John",
      image: "",
      category: "123",
      featured: "123",
      price: "123",
      description: "123"
    },
    {
      id: "1",
      name: "John",
      image: "",
      category: "123",
      featured: "123",
      price: "123",
      description: "123"
    },
    {
      id: "1",
      name: "John",
      image: "",
      category: "123",
      featured: "123",
      price: "123",
      description: "123"
    }
  ];
  ngOnInit() {}
}

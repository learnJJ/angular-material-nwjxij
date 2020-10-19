import { Component, OnInit, Input } from "@angular/core";
import { Dish } from "../shared/dish";

@Component({
  selector: "dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.css"]
})
export class DishDetailComponent implements OnInit {
  @Input()
  dish: Dish;
  constructor() {}

  ngOnInit() {}
}

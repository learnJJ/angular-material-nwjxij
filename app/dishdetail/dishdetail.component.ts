import { Component, OnInit, Input } from "@angular/core";
import { Dish } from "../shared/dish";
import { Params, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { DishService } from "../services/dish.service";

@Component({
  selector: "dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"]
})
export class DishDetailComponent implements OnInit {
  @Input()
  dish: Dish;
  constructor(
    private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    this.dish = this.dishservice.getDish(id);
  }

  goBack(): void {
    this.location.back();
  }
}

import { Component, OnInit } from "@angular/core";
import { LeaderService } from "../services/leader.service";
import { Leader } from "../shared/leader";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private leaderservice: LeaderService) {}
  featuredLeader: Leader;
  ngOnInit() {
    this.featuredLeader = this.leaderservice.getFeaturedLeader();
    // this.featuredLeader = this.leaders.filter(leader => {
    //   if (leader.featured) {
    //     return leader;
    //   }
    // });
  }
}

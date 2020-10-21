import { Component, OnInit } from "@angular/core";
import { LeaderService } from "../services/leader.service";
import { Leader } from "../shared/leader";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  person: Leader;
  constructor(private leaderservice: LeaderService) {}
  leaders: Leader[];
  featuredLeader: any;
  ngOnInit() {
    this.leaders = this.leaderservice.getLeaders();
    this.person = this.leaders.filter(leader => {
      if (leader.featured) {
        return leader;
      }
    });
    console.log(this.featuredLeader);
  }
}

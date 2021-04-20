import { Component, OnInit } from "@angular/core";
import { NeoServiceService } from "../../_helpers/neo-service.service";

@Component({
  selector: "app-dashboard-screen",
  templateUrl: "./dashboard-screen.component.html",
  styleUrls: ["./dashboard-screen.component.scss"],
})
export class DashboardScreenComponent implements OnInit {
  constructor(private service: NeoServiceService) {}

  ngOnInit(): void {
    this.service.getTest().subscribe(
      (res: any[]) => {
        console.log("Server repsonse ", res);
      },
      (err) => {
        console.log("error : ", err);
      }
    );
  }
}

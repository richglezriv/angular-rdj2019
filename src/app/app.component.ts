import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  myCollection = ["a", "b", "c"];

  ngOnInit(): void {
    console.log(this.myCollection[0]);
    console.log(this.myCollection[5]);

  }
}

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";
@Component({
  selector: "app-home",
  template: `
    <h3>{{ message }}</h3>
    <img [src]="image" />
    <ul>
      <li *ngFor="let item of packages">
        <p>{{ item.title }}</p>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  `
})
export class HomeComponent implements OnInit {
  public message = `Angular Universal`;
  // tslint:disable-next-line:max-line-length
  public image =
    "https://camo.githubusercontent.com/81f72f2fdf98aa1d30b5b215bc8ca9420b249e81/68747470733a2f2f616e67756c61722e696f2f67656e6572617465642f696d616765732f6d61726b6574696e672f636f6e636570742d69636f6e732f756e6976657273616c2e706e67";
  packages: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get(environment.apiUrl + "packages").subscribe((res: any) => {
      console.log(res.data);
      this.packages = res.data;
    });
  }
}

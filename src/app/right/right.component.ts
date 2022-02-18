import {Component, Inject, OnInit} from '@angular/core';
import {DemoService} from "../_services/demo.service";
import {DEMO_SERVICE} from "../app.module";

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  constructor(@Inject(DEMO_SERVICE) public demoService: DemoService) { }

  ngOnInit(): void {
  }

}

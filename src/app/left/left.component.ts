import {Component, Inject, OnInit} from '@angular/core';
import {DemoService} from "../_services/demo.service";
import {DEMO_SERVICE} from "../app.module";

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  constructor(@Inject(DEMO_SERVICE) public demoService: DemoService) { }

  ngOnInit(): void {
  }

}

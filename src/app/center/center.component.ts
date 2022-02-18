import {Component, Inject, OnInit} from '@angular/core';
import {DemoService} from "../_services/demo.service";
import {DEMO_SERVICE} from "../app.module";

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {

  constructor(@Inject(DEMO_SERVICE) public demoService: DemoService) { }

  ngOnInit(): void {
  }

}

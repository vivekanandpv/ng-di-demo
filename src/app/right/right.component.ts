import { Component, OnInit } from '@angular/core';
import {DemoService} from "../_services/demo.service";

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  constructor(public demoService: DemoService) { }

  ngOnInit(): void {
  }

}

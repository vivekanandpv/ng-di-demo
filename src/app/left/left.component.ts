import { Component, OnInit } from '@angular/core';
import {DemoService} from "../_services/demo.service";

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  constructor(public demoService: DemoService) { }

  ngOnInit(): void {
  }

}

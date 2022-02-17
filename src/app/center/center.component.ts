import { Component, OnInit } from '@angular/core';
import {DemoService} from "../_services/demo.service";

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {

  constructor(public demoService: DemoService) { }

  ngOnInit(): void {
  }

}

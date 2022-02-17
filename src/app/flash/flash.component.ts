import { Component, OnInit } from '@angular/core';
import {DemoService} from "../_services/demo.service";

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss']
})
export class FlashComponent implements OnInit {

  constructor(public demoService: DemoService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hightlight',
  templateUrl: './hightlight.component.html',
  styleUrls: ['./hightlight.component.scss']
})
export class HightlightComponent implements OnInit {

  title: string = 'dap-mandiri-apps';

  constructor() { }

  ngOnInit(): void {
  }

}

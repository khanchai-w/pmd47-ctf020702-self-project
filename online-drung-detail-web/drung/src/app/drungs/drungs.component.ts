import { DrungListComponent } from './drung-list/drung-list.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drungs',
  templateUrl: './drungs.component.html',
  styleUrls: ['./drungs.component.css']
})
export class DrungsComponent implements OnInit {
  @ViewChild('drungList',{static:true}) drungList: DrungListComponent

  title = 'ข้อมูลยาเพื่อประชาชน';

  constructor() { }

  ngOnInit(): void {

    console.log("Start Drung");
  }

}

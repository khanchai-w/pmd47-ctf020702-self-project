import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Drung } from 'src/app/models/drung';

@Component({
  selector: 'app-drung-item',
  templateUrl: './drung-item.component.html',
  styleUrls: ['./drung-item.component.css']
})
export class DrungItemComponent implements OnInit {
  @Input()
  drung: Drung

  @Output()
  OnSelected: EventEmitter<DrungItemComponent> = new EventEmitter();
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

}

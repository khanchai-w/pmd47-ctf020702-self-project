import { DrungService } from './../../services/drung.service';
import { Drung } from './../../models/drung';
import { DrungItemComponent } from './../drung-item/drung-item.component';
import { Component, Input, OnInit, QueryList, SystemJsNgModuleLoader, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-drung-list',
  templateUrl: './drung-list.component.html',
  styleUrls: ['./drung-list.component.css']
})
export class DrungListComponent implements OnInit {
  @ViewChildren(DrungItemComponent,{read: false})  drungItems: QueryList<DrungItemComponent>;

  @Input()
  keyword: String;

  drungs: Drung;
  error: string;

  constructor(
    private drungService: DrungService
  ) {

  }

  ngOnInit(): void {
    this.drungService.getDrungs().subscribe(
      (data: Drung) => this.drungs =data,
      error => this.error = error
    );
  }

  findDrung(keyword){
    if(keyword==''){
      this.ngOnInit();
      this.error='';
    }else{
      this.drungService.getDrungByDrungName(keyword).subscribe(
        (data: Drung) => this.drungs =data,
        error => this.error = error
      );
    }
  }
}

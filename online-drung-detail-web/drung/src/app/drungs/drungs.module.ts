import { FormGroup, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DrungService } from './../services/drung.service';
import { BrowserModule } from '@angular/platform-browser';
import { DrungListComponent } from './drung-list/drung-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrungItemComponent } from './drung-item/drung-item.component';
import { DrungsComponent } from './drungs.component';

@NgModule({
  declarations: [
    DrungItemComponent,
    DrungListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    DrungItemComponent,
    DrungListComponent
  ]
})
export class DrungsModule { }

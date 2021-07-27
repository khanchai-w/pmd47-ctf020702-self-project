import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DrungFormComponent } from './drung-form/drung-form.component';
import { DrungManageComponent } from './drung-manage/drung-manage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DrungManageComponent,
    DrungFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    DrungManageComponent,
    DrungFormComponent
  ]
})
export class AdminModule {}


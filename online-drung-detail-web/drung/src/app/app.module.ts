import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin.component';
import { DrungService } from './services/drung.service';
import { DrungsModule } from './drungs/drungs.module';
import { DrungsComponent } from './drungs/drungs.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrungListComponent } from './drungs/drung-list/drung-list.component';
import { DrungDetailComponent } from './drungs/drung-detail/drung-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DrungFormComponent } from './admin/drung-form/drung-form.component';
import { DrungManageComponent } from './admin/drung-manage/drung-manage.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: DrungsComponent
  },
  {
    path: 'detail/:drungId',
    component: DrungDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/druns',
    component: DrungManageComponent
  },
  {
    path: 'admin/drung/add',
    component: DrungFormComponent
  },
  {
    path: 'admin/drung/update/:drungId',
    component: DrungFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DrungsComponent,
    NavBarComponent,
    FooterComponent,
    AdminComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    DrungsModule,
    HttpClientModule,
    AdminModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ DrungService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

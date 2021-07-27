import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Drung } from './../../models/drung';
import { DrungService } from './../../services/drung.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drung-manage',
  templateUrl: './drung-manage.component.html',
  styleUrls: ['./drung-manage.component.css']
})
export class DrungManageComponent implements OnInit {
  @Input()
  keyword:String;

  drungs: Drung;
  error: String;


  constructor(
    private drungService: DrungService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

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

  deleteDrungById(drungId:number, drungName: String){
    if (confirm('คุณกำลังต้องการลบข้อมูลยา '+ drungName + ' ใช่หรือไม่')) {
      this.drungService.deleteDrungById(+drungId).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
          this.openSnackBar('ลบข้อมูลยา : '+drungName+' แล้ว','ปิด');
        },
        error => this.error = error
      );
    }
  }

   /* Snack Bar */
   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}

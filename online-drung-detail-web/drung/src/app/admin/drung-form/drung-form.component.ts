import { ActivatedRoute, Router } from '@angular/router';
import { DrungService } from './../../services/drung.service';
import { Drung } from './../../models/drung';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-drung-form',
  templateUrl: './drung-form.component.html',
  styleUrls: ['./drung-form.component.css']
})
export class DrungFormComponent implements OnInit {
  pageTitle: string;
  drung: Drung;
  drungForm: FormGroup;
  isUpdate : boolean;
  error: String;

  drungType: {
    drungtypeId: number,
    typeName: String
  }

  constructor(
    private fb: FormBuilder,
    private drungService: DrungService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    const drungId = this.route.snapshot.paramMap.get('drungId');
    if (drungId) {
      this.drungService.getDrungById(+drungId).subscribe(
        res=>{
          this.drungForm.patchValue({
          drungId: res.drungId,
          drungName: res.drungName,
          //drungType: {
            //drungtypeId: res.drungType.drungtypeId,
            typeName: res.drungType.typeName,
          //},
          dosage: res.dosage,
          propreties: res.propreties,
          beforeUse: res.beforeUse,
          howUse: res.howUse,
          codeConduct: res.codeConduct,
          danger: res.danger,
          keep: res.keep,
          look: res.look,
          image: res.image,
          referUrl: res.referUrl
        });
      });
      this.isUpdate = true;
    }

    //กำหนดค่าเริ่มต้นให้กับ element id
    this.drungForm = this.fb.group({
          drungId: [''],
          drungName: ['',Validators.required],
          typeName: ['',Validators.required],
          dosage: ['',Validators.required],
          propreties: ['',Validators.required],
          beforeUse: ['',Validators.required],
          howUse: ['',Validators.required],
          codeConduct: ['',Validators.required],
          danger: ['',Validators.required],
          keep: ['',Validators.required],
          look: ['',Validators.required],
          image: [''],
          referUrl: ['']
    });
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('drungId', this.drungForm.get('drungId').value);
    formData.append('drungName', this.drungForm.get('drungName').value);
    formData.append('drungType', this.drungForm.get('typeName').value);
    formData.append('dosage', this.drungForm.get('dosage').value);
    formData.append('propreties', this.drungForm.get('propreties').value);
    formData.append('beforeUse', this.drungForm.get('beforeUse').value);
    formData.append('howUse', this.drungForm.get('howUse').value);
    formData.append('codeConduct', this.drungForm.get('codeConduct').value);
    formData.append('danger', this.drungForm.get('danger').value);
    formData.append('keep', this.drungForm.get('keep').value);
    formData.append('look', this.drungForm.get('look').value);
    formData.append('image', this.drungForm.get('image').value);
    formData.append('referUrl', this.drungForm.get('referUrl').value);

    const drungId = this.drungForm.get('drungId').value;

      var object = {};
  formData.forEach(function(value, key){
      object[key] = value;
  });
  var json = JSON.stringify(object);

    if(this.isUpdate){
      if (confirm('ก่อนบันทึกกรุณาตรวจสอบข้อมูลยาให้ถูกต้อง คุณต้องการบันทึกใช่หรือไม่')) {
        this.drungService.updateDrung(json).subscribe(
          res => {
            console.log(res);
            this.openSnackBar('อับเดรตข้อมูลยา รหัส: '+drungId+' เรียบร้อยแล้ว','ปิด');
            this.router.navigate(['/admin']);
          },
          error => this.error = error
        );
      }
    }else{
      if (confirm('ก่อนบันทึกกรุณาตรวจสอบข้อมูลยาให้ถูกต้อง คุณต้องการบันทึกใช่หรือไม่')) {
        this.drungService.addDrung(json).subscribe(
          res => {
            console.log(res);
            this.openSnackBar('เพิ่มข้อมูลยาเรียบร้อยแล้ว','ปิด');
            this.router.navigate(['/admin']);
          },
          error => this.error = error
        );
      }
    }
  }

   /* Snack Bar */
   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}

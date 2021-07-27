import { Drung } from './../../models/drung';
import { DrungService } from './../../services/drung.service';
import { ActivatedRoute, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drung-detail',
  templateUrl: './drung-detail.component.html',
  styleUrls: ['./drung-detail.component.css']
})
export class DrungDetailComponent implements OnInit {
  drung: Drung;
  error: String;

  constructor(
    private drungService: DrungService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const drungId = this.route.snapshot.paramMap.get('drungId');
    this.drungService.getDrungById(+drungId).subscribe(
      (data: Drung) => this.drung = data,
      error => this.error = error
    );
  }

}

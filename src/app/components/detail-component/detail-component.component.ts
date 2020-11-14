import { Component, OnInit, Input } from '@angular/core';
import { PersonModel } from 'src/app/models/person/person-model';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {

  @Input() person: PersonModel;

  constructor() { }

  ngOnInit(): void {
  }

}

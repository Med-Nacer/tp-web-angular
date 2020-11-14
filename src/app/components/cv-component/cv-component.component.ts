import { Component, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/models/person/person-model';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent implements OnInit {

  currPerson : PersonModel;

  constructor() { }

  ngOnInit(): void {
  }

  getPerson(event){
    this.currPerson=event;
    console.log(`cv : ${event}`)
  }
}

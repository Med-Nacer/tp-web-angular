import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonModel } from 'src/app/models/person/person-model';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent implements OnInit {

  @Input() person : PersonModel;
  @Output() selectedPersonEmitter = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  selectItem(){
    console.log(`Person Selected : ${this.person.firstName}`);
    this.selectedPersonEmitter.emit(this.person);
  } 

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonModel } from 'src/app/models/person/person-model';
import { PersonStoreService } from 'src/app/services/person-store/person-store.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  
  persons: PersonModel[]= [];
  @Output() selectedPersonEmitter = new EventEmitter();
  
  constructor(private personnesService: PersonStoreService) { }

  ngOnInit(): void {
    this.persons = this.personnesService.getAllPersons();
  }

  sendPerson(event){
    this.selectedPersonEmitter.emit(event);
  }
}

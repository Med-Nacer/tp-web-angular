import { Injectable } from '@angular/core';
import { PersonModel } from 'src/app/models/person/person-model';

@Injectable({
  providedIn: 'root'
})
export class PersonStoreService {

  private allPersons: PersonModel[]= [
    new PersonModel(0,'Aymen','Sellaouti','Professor','11111111',38,'assets/images/aymen.jpg'),
    new PersonModel(1,'Nacer','Massoudi','Student','22222222',23,'assets/images/nacer.jpg'),
  ];
  constructor() { }

  getAllPersons(): PersonModel[] {
    return this.allPersons;
  }
}

import { Injectable } from '@angular/core';
import {Person } from '../entity/Person';
import {Phones} from '../entity/phones';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {
  list: Array<Person> = [];
    constructor( private httpClient: HttpClient) {
    this.getAll();
  }
  getAll(): void {
    this.httpClient.get('http://localhost:8000/people').subscribe((results: Array<object>) => {
      this.list = results.map((obj: object) => {
        return Object.assign(new Person(), obj);
      });
      console.log(this.list);
    });
  }

}


import {Component, OnInit} from '@angular/core';
import {PhoneBookService} from '../services/phone-book.service';
import {Person} from '../entity/Person';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent implements OnInit {

  constructor(private phoneBookService: PhoneBookService) {
  }

  ngOnInit() {

  }

  get list(): Array<Person> {
    return this.phoneBookService.list;
  }
  /*
  get firstName(): Array<Person> {
    return this.phoneBookService.list.fi
  }

   */
}

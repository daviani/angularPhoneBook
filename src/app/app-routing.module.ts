import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { PhoneBookDetailsComponent } from './phone-book-details/phone-book-details.component';

const routes: Routes = [
  { path: 'app-phone-book', component: PhoneBookComponent },
  { path: 'edit/:index', component: PhoneBookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

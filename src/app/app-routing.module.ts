import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

initsimport { QuoteListComponent } from './quote/quote-list/quote-list.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: QuoteListComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }
   ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDetailComponent } from './quote/quote-detail/quote-detail.component';
import { QuoteListComponent } from './quote/quote-list/quote-list.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { JobListComponent } from './job/job-list/job-list.component';
import { JobDetailComponent } from './job/job-detail/job-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailComponent,
    QuoteListComponent,
    ClientListComponent,
    ClientDetailComponent,
    JobListComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

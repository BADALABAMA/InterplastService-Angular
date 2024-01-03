import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductSearchService } from './services/product-search.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ components/header/header.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './ components/nav/nav.component';
import { MainComponent } from './ components/main/main.component';
import { FooterComponent } from './ components/footer/footer.component';
import { ProductCardComponent } from './ components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  providers: [ProductSearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}

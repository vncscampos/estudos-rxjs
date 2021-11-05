import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragdropComponent } from './views/dragdrop/dragdrop.component';
import { AutocompleteComponent } from './views/autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    DragdropComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

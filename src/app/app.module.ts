import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GridModule} from '@syncfusion/ej2-angular-grids';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import {DropDownListModule} from '@syncfusion/ej2-angular-dropdowns';


@NgModule({
  declarations: [
    AppComponent,
    DropdownListComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    DropDownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

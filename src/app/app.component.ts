import {Component, OnInit} from '@angular/core';
import {data} from './datasource';
import {PageSettingsModel} from '@syncfusion/ej2-grids';
import {SortService} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SortService]
})
export class AppComponent implements OnInit {
  title = 'syncfusion-grid';
  data: object[];
  public pageSettings: PageSettingsModel;

  ngOnInit(): void {
    this.data = data;
    this.pageSettings = {pageSize: 6};
  }
}

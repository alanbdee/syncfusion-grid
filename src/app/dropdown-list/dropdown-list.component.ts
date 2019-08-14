import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent implements OnInit {
  testLocations: string[] = ['37020', '29450', '29449'];
  testSelectedLocation: string;

  testLocations2: any[] = [
    {value: '37020', text: '37020: test1'},
    {value: '29450', text: '29450: test2'},
    {value: '29449', text: '29449: test3'},
    ];
  testSelectedLocation2: string;

  testLocations3: any[] = [
    {deptCode: '37020', deptDesc: '37020: test1'},
    {deptCode: '29450', deptDesc: '29500: test2'},
    {deptCode: '29449', deptDesc: '29449: test3'},
    ];
  testSelectedLocation3: string;

  constructor() { }

  ngOnInit() {
  }

}

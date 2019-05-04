import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  select : string;
  name: string;
  position: number;
  weight: number;
  symbols: string;
}



/**
 * @title Table with selection
 */
@Component({
  selector: 'table-selection-example',
  styleUrls: ['table-selection-example.css'],
  templateUrl: 'table-selection-example.html',
})
export  class TableSelectionExample {
    ELEMENT_DATA: PeriodicElement[] = [
  {select :'yes',position: 1, name: 'Hydrogen', weight: 1.0079, symbols: 'H'},
  {select :'yes',position: 2, name: 'Helium', weight: 4.0026, symbols: 'He'},
  {select :'no',position: 3, name: 'Lithium', weight: 6.941, symbols: 'Li'},
  {select :'no',position: 4, name: 'Beryllium', weight: 9.0122, symbols: 'Be'},
  {select :'yes',position: 5, name: 'Boron', weight: 10.811, symbols: 'B'},
  {select :'no',position: 6, name: 'Carbon', weight: 12.0107, symbols: 'C'},
  {select :'yes',position: 7, name: 'Nitrogen', weight: 14.0067, symbols: 'N'},
  {select :'yes',position: 8, name: 'Oxygen', weight: 15.9994, symbols: 'O'},
  {select :'yes',position: 9, name: 'Fluorine', weight: 18.9984, symbols: 'F'},
  {select :'yes',position: 10, name: 'Neon', weight: 20.1797, symbols: 'Ne'},
];
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
 
  //selection = new SelectionModel<PeriodicElement>(true, []);
//checked:boolean=false;
ifchecked(select:string):boolean{

 // for(var i =0; i>this.ELEMENT_DATA.length;i++){
 //   console.log("vlue: "+this.ELEMENT_DATA[i].select);
  //  if(this.ELEMENT_DATA[i].select == select){
   //   console.log('trueeeee');

//return  true;
//break;
 //   }
 //   else{
     // console.log('falseeeeeee');
 //     return false;
  //    break;
  if(select =='yes')
  return true;
    }
   
  

  /** Whether the number of selected elements matches the total number of rows. */
  
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
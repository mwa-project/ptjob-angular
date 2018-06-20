import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busy-dialog',
  template: `
  <mat-spinner [strokeWidth]="5" [diameter]="80"></mat-spinner>
  `,
  styles: []
})
export class BusyDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

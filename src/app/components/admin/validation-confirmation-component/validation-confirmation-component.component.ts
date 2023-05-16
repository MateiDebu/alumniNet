import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-validation-confirmation-component',
  templateUrl: './validation-confirmation-component.component.html',
  styleUrls: ['./validation-confirmation-component.component.scss']
})
export class ValidationConfirmationComponentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-detele-confirmation-component',
  templateUrl: './detele-confirmation-component.component.html',
  styleUrls: ['./detele-confirmation-component.component.scss']
})
export class DeleteConfirmationComponentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}

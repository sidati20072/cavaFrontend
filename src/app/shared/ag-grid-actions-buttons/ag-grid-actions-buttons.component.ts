import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {IAfterGuiAttachedParams, ICellRendererParams} from 'ag-grid-community';

export interface AgGridButton {
  title: string;
  fn: any;
  text?: string;
  icon?: string;
  disabled?: any;
  hidden?: any;
  style?: any;
}

export interface ButtonParams extends ICellRendererParams {
  title?: string;
  buttons?: AgGridButton[];
  data: any;
}

@Component({
  selector: 'app-ag-grid-actions-buttons',
  templateUrl: './ag-grid-actions-buttons.component.html',
  styleUrls: ['./ag-grid-actions-buttons.component.scss']
})
export class AgGridActionsButtonsComponent {
 /* buttons: any[];
  title: string;
  data: any;

  afterGuiAttached(params?: IAfterGuiAttachedParams): void {
  }

  refresh(params: any): boolean {
    return false;
  }

  agInit(params: ButtonParams): void {
    this.data = params.data;
    this.buttons = params.buttons;
    this.title = params.title;

  }*/

}

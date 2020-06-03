import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
@NgModule({
  declarations: [EmployeeListComponent, EmployeeAddComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzPopconfirmModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzRadioModule,
    NzDatePickerModule,
    NzButtonModule,
    NzModalModule
  ]
})
export class EmployeesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersDatatableComponent } from './components/users-datatable/users-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UsersComponent, UserManagementComponent, UsersDatatableComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    NgxDatatableModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule
  ]
})
export class UsersModule { }

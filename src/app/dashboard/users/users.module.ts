import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersDatatableComponent } from './components/users-datatable/users-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [UsersComponent, UserManagementComponent, UsersDatatableComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    NgxDatatableModule
  ]
})
export class UsersModule { }

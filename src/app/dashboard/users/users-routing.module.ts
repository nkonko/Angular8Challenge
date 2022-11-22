import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserManagementComponent } from "./components/user-management/user-management.component";
import { UsersComponent } from "./users.component";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
  },
  {
    path: "user-management",
    component: UserManagementComponent,
  },
  {
    path: "user-management/:id",
    component: UserManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

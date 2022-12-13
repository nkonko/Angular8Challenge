import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared.module";
import { HeaderComponent } from "./header/header.component";
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [HeaderComponent, ConfirmModalComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HeaderComponent, ConfirmModalComponent],
  entryComponents: [ConfirmModalComponent],
})
export class UiComponentsModule {}

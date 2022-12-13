import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  public onClose: Subject<boolean>;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.onClose = new Subject();
  }

  onConfirm(): void {
    this.onClose.next(true);
    this.bsModalRef.hide();
  }

  onCancel(): void {
    this.onClose.next(false);
    this.bsModalRef.hide();
  }

}

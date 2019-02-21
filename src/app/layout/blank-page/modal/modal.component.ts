import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() modalHeader = 'Modal';
  @Input() closeByBackdropClick = true;
  @Output() close = new EventEmitter<boolean>();
  @ViewChild('overlayRef') overlayRef: ElementRef;

  handleClickBackdrop(event) {
    if (this.overlayRef.nativeElement !== event.target || !this.closeByBackdropClick) {
      return;
    }
    this.isOpen = false;
    this.close.emit(false);
  }
}

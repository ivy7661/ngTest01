import { Component } from '@angular/core';
import { ModalComponent } from '../../component/modal/modal.component';

@Component({
  selector: 'app-open-modal',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './open-modal.component.html',
  styleUrl: './open-modal.component.scss'
})
export class OpenModalComponent {

  public openModal(modalRef:ModalComponent): void {
    modalRef.modalService.open();
  }
}

import { Component } from '@angular/core';
import { ModalComponent } from '../../component/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public openModal(modalRef:ModalComponent) {
    modalRef.modalService.open();
  }
}

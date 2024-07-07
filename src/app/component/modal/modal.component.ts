import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared/service/modal.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  providers:[ModalService]
})
export class ModalComponent implements OnInit {

  constructor(public modalService:ModalService) {}

  ngOnInit(): void {
    
  }
  close(): void {
    this.modalService.close();
  }

  open(): void {
    this.modalService.open();
  }

  get show() {
    return this.modalService.show;
  }
}

import { Subject } from "rxjs";

export class ModalService {
  public show = new Subject<boolean>();

  constructor() { }

  open(): void {
    this.show.next(true);
  }

  close(): void {
    this.show.next(false);
  }
}

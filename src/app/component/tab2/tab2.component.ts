import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './tab2.component.html',
  styleUrl: './tab2.component.scss'
})
export class Tab2Component {
  files: File[] = [];
  // isDragOver = false;

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // this.isDragOver = false;

    if (event.dataTransfer?.files) {
      this.files = Array.from(event.dataTransfer.files);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.files = Array.from(input.files);
    }
  }
}

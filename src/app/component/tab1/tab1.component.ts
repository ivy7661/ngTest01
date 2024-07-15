import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';


@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [NgScrollbarModule, NgFor],
  templateUrl: './tab1.component.html',
  styleUrl: './tab1.component.scss'
})
export class Tab1Component {
  public items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);
}

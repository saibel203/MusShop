import { Component } from '@angular/core';
import { MasonrySectionComponent } from './masonry-section/masonry-section.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  standalone: true,
  imports: [
    MasonrySectionComponent,
  ],
})
export class MainPageComponent {
}
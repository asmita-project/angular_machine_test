import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-mainlayout',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css',
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainlayoutComponent {

}

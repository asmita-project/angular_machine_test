import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {
  showFiller = false;
}

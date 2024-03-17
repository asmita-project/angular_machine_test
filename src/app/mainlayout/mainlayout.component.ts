import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list'
@Component({
  selector: 'app-mainlayout',
  standalone: true,
  imports: [HeaderComponent,MatSidenavModule,MatIconModule],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css',
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainlayoutComponent {

}

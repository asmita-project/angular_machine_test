import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list'
import { RouterOutlet,RouterLink } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSidenavModule,
    MatListModule,
    MatIconModule,MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterOutlet,
    RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas:  [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class HeaderComponent {
  constructor(private service:UserService){}
  showFiller = false;
  public isExpanded = false;
  logout(){
  this.service.logout()
  }
 
}



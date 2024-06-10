import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})

export class NavbarComponent {
  menuDisplay: string = 'none';
  menuClicked:boolean = false;

  toggleMenu(){
    if (this.menuClicked){
      // untoggle menu
      this.menuDisplay = "none";
      this.menuClicked = false;
    } else{
      // toggle menu
      this.menuDisplay = "block";
      this.menuClicked = true;
    }
  }
}

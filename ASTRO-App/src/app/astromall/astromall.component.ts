import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-astromall',
  templateUrl: './astromall.component.html',
  styleUrl: './astromall.component.css'
})
export class AstromallComponent {

  title = 'demo';
  constructor(private router: Router){

  }
  navigateToPage(){
    this.router.navigateByUrl('/shop');
  }
}

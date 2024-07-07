import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = 'demo';
  constructor(private router: Router){

  }
 chatNow(){
    this.router.navigateByUrl("/chatWithAstrologer")
 }
}

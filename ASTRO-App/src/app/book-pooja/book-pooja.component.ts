import { Component } from '@angular/core';

@Component({
  selector: 'app-book-pooja',
  templateUrl: './book-pooja.component.html',
  styleUrl: './book-pooja.component.css'
})
export class BookPoojaComponent {

  title = 'demo';

  navigateToPage(){
    // this.router.navigateByUrl('/book-Pooja');
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ASTRO-App';

  constructor(private router: Router){

  }
  navigateToPage(){
    this.router.navigateByUrl('/freekundli');
  }
  navigateToKundliMatchingPage(){
    this.router.navigateByUrl('/matchmaking');
  }
  navigateToChatwithAstrologerPage(){
    this.router.navigateByUrl('/chat-with-astrologer');
  }
  navigateToTalktoAstrologerPage(){
    this.router.navigateByUrl('/talk-to-Astrologer');
  }
  navigateToBookPoojaPage(){
    this.router.navigateByUrl('/book-Pooja');
  }
    navigateToAstromallPage(){
      this.router.navigateByUrl('/shop');
  }
  navigateToBlogPage(){
    this.router.navigateByUrl('/astrology-blog');
}
}

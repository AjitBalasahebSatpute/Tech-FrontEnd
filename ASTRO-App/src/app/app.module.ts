import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AstromallComponent } from './astromall/astromall.component';
import { BlogComponent } from './blog/blog.component';
import { BookPoojaComponent } from './book-pooja/book-pooja.component';
import { ChatWithAustrologerComponent } from './chat-with-austrologer/chat-with-austrologer.component';
import { KundaliComponent } from './kundali/kundali.component';
import { KundaliMatchingComponent } from './kundali-matching/kundali-matching.component';
import { TalkToAstrologerComponent } from './talk-to-astrologer/talk-to-astrologer.component';
import { ServerModule } from '@angular/platform-server';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AstromallComponent,
    BlogComponent,
    BookPoojaComponent,
    ChatWithAustrologerComponent,
    KundaliComponent,
    KundaliMatchingComponent,
    TalkToAstrologerComponent,
    AuthComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServerModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

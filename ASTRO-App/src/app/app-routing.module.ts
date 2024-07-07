import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KundaliComponent } from './kundali/kundali.component';
import { KundaliMatchingComponent } from './kundali-matching/kundali-matching.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ChatWithAustrologerComponent } from './chat-with-austrologer/chat-with-austrologer.component';
import { BookPoojaComponent } from './book-pooja/book-pooja.component';
import { AstromallComponent } from './astromall/astromall.component';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TalkToAstrologerComponent } from './talk-to-astrologer/talk-to-astrologer.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"freeKundali",component:KundaliComponent},
  {path:"kundaliMatching",component:KundaliMatchingComponent},
  {path:"auth",children:[
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignUpComponent},
    {path:"",pathMatch:'full',redirectTo:"login"}
  ]},
  {path:"chatWithAstrologer", component:ChatWithAustrologerComponent},
  {path:"talkWithAstrologer", component:TalkToAstrologerComponent},
  {path:"bookpooja",component:BookPoojaComponent},
  {path:"astromall",component:AstromallComponent},
  {path:"blog",component:BlogComponent},
  {path:"",pathMatch:'full',redirectTo:"dashboard"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

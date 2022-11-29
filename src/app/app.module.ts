import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
// import { SignUpComponent } from './sign-up/sign-up.component';
// import { LanguagePopupComponent } from './components/language-popup/language-popup.component';
import { JobofferComponent } from './components/joboffer/joboffer.component';
import { ApplyjobComponent } from './components/applyjob/applyjob.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddemployerComponent } from './components/addemployer/addemployer.component';
import { ProfileComponent } from './components/profile/profile.component';


// import { ManagejobsComponent } from './components/managejobs/managejobs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponent,
    // SignUpComponent,
    // LanguagePopupComponent,
    JobofferComponent,
    ApplyjobComponent,
    FooterComponent,
    AddemployerComponent,
    ProfileComponent,
    
    // ManagejobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

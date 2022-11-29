import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobofferComponent } from './components/joboffer/joboffer.component';
import { ManagejobsComponent } from './components/managejobs/managejobs.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ApplyjobComponent } from './components/applyjob/applyjob.component';
import { LanguagePopupComponent } from './components/language-popup/language-popup.component';
import { AddemployerComponent } from './components/addemployer/addemployer.component';

const routes: Routes = [
  {path:'signup',component:SignUpComponent},
  {path:'managejobs',component:ManagejobsComponent},
  {path:'joboffer',component:JobofferComponent},
  {path:'applyjob',component:ApplyjobComponent},
  {path:'language',component:LanguagePopupComponent},
  {path:'addemp',component:AddemployerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[SignUpComponent,ManagejobsComponent,JobofferComponent,ApplyjobComponent,LanguagePopupComponent,AddemployerComponent]
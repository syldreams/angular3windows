import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagePrincipaleComponent } from './page-principale/page-principale.component';
import { PageDeuxComponent } from './page-deux/page-deux.component';
import { PageTroisComponent } from './page-trois/page-trois.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagePrincipale',
    pathMatch: 'full',
  },
  {
    path: 'pagePrincipale',
    component: PagePrincipaleComponent
  },
  {
    path: 'pageDeux',
    component: PageDeuxComponent
  },
  {
    path: 'pageTrois',
    component: PageTroisComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    PagePrincipaleComponent,
    PageDeuxComponent,
    PageTroisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

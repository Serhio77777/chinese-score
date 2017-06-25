import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { ScoreComponent } from './score/score.component';

const appRoutes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'score',
    component: ScoreComponent,
  },
  {
    path: '**',
    component: MenuComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SettingsComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

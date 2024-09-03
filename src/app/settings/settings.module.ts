import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { settingsReducer } from './store/reducers';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', settingsReducer),
  ],
})
export class SettingsModule {}

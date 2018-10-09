import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/';

import { AppComponent } from './containers/app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';



export const COMPONENTS = [
    AppComponent,
    SidenavComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/';

import { AppComponent } from './containers/app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';



export const COMPONENTS = [
    AppComponent,
    SidenavComponent,
    NavItemComponent,
    LayoutComponent,
    ToolbarComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {}

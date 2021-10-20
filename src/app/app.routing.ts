/*
 *
 *  * Copyright (c) 2020. ALIS.
 *  * Proprietary source code; any copy or modification is prohibited.
 *  *
 *  *
 *  *
 *
 */

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AuthGuard} from './helpers/auth.guard';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  //{path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''},
];

export const appRoutingModule = RouterModule.forRoot(routes);

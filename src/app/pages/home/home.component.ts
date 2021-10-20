/*
 *
 *  * Copyright (c) 2020. ALIS.
 *  * Proprietary source code; any copy or modification is prohibited.
 *  *
 *  *
 *  *
 *
 */

import {Component} from '@angular/core';
import {Token} from '../../models/user';
import {AuthenticationService} from '../../services/authentication.service';


@Component({templateUrl: 'home.component.html'})
export class HomeComponent {
  token: Token;
  users: any[] = [];

  constructor(private authenticationService: AuthenticationService) {
    this.token = this.authenticationService.tokenValue;
  }
}

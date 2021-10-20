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
import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';
import {Token} from './models/user';
import {TranslateService} from '@ngx-translate/core';


@Component({selector: 'app', styleUrls: ['app.component.scss'], templateUrl: 'app.component.html'})
export class AppComponent {
  token: Token;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              translate: TranslateService) {
    this.authenticationService.token.subscribe(x => this.token = x);
    translate.addLangs(['fr']);
    translate.setDefaultLang('fr');
    translate.use('fr');
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

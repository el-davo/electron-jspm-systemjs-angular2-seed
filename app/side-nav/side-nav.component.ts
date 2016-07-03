import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Router} from '@angular/router';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';

import {TiSideNavList} from './side-nav-list.component';

@Component({
    selector: 'ti-side-nav',
    templateUrl: 'side-nav/side-nav.html',
    directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, TiSideNavList]
})
export class TiSideNav {

    constructor(private router:Router) {
    }

    ngOnInit() {
        //this.router.navigate(['/ping']);
    }
}
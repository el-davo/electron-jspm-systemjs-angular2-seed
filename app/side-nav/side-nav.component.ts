import {Component} from '@angular/core';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';

import {TiSideNavList} from './side-nav-list.component';

@Component({
    selector: 'ti-side-nav',
    templateUrl: 'side-nav/side-nav.html',
    directives: [MD_SIDENAV_DIRECTIVES, TiSideNavList]
})
export class TiSideNav {
}
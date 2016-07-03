import {Component} from '@angular/core';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material';

@Component({
    selector: 'ti-side-nav-list',
    templateUrl: 'side-nav/list.html',
    providers: [MATERIAL_PROVIDERS],
    directives: [MATERIAL_DIRECTIVES]
})
export class TiSideNavList {
}
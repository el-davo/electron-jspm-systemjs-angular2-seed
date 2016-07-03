import {Component} from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
    selector: 'tr-nav',
    directives: [MdToolbar],
    template: `<md-toolbar color="primary" md-scroll-shrink>{{username}}</md-toolbar>`
})
export class TrNav {
}
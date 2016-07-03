import 'zone.js';
import 'reflect-metadata';
import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import ping from 'tcp-ping';
import {TrNav} from './navbar/navbar.component'

@Component({
    selector: 'graph-ci-app',
    directives: [TrNav],
    template: `
               <tr-nav></tr-nav>
                `
})
class GraphCi {

    constructor() {}

    ngOnInit() {
        //this.router.navigate(['/dashboard', 'root']);

        ping.ping({ address: 'www.google.com'}, function(err, data) {
            console.log(data);
        });
    }
}

bootstrap(GraphCi, [
]);
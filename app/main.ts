import 'zone.js';
import 'reflect-metadata';
import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import ping from 'tcp-ping';
import TraceRoute from 'traceroute-lite';
import {TrSideNav} from './side-nav/side-nav.component'

@Component({
    selector: 'graph-ci-app',
    directives: [TrSideNav],
    template: `
               <ti-side-nav></ti-side-nav>
                `
})
class GraphCi {

    constructor() {}

    ngOnInit() {
        //this.router.navigate(['/dashboard', 'root']);

        /*ping.ping({ address: 'www.google.com'}, function(err, data) {
            console.log(data);
        });

        var traceroute = new TraceRoute('8.8.8.8');

        traceroute.on('hop', function(hop) {
            console.log(hop); // { counter: 1, ip: '1.2.3.4', ms: 12 }
        });

        traceroute.start(function(err, hops) {
            console.log(hops);
        });*/
    }
}

bootstrap(GraphCi, [
]);
import 'zone.js';
import 'reflect-metadata';
import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Router} from '@angular/router';
import {ROUTER_PROVIDERS} from '@angular/router';

import {TiSideNav} from './side-nav/side-nav.component';
import {TiPing} from './ping/ping.component';
import {TiTraceRoute} from './trace-route/trace-route.component';

@Component({
    selector: 'ti-electron-app',
    directives: [ROUTER_DIRECTIVES, TiSideNav],
    template: `
        <ti-side-nav></ti-side-nav>
        `
})
@Routes([
    {path: '/', name: 'base', component: TiPing, useAsDefault: true},
    {path: '/trace-route', name: 'base', component: TiTraceRoute}
])
class TiElectronApp {

    constructor(private router:Router) {
    }

    ngOnInit() {

        //this.router.navigate(['/ping']);
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

bootstrap(TiElectronApp, [
    ROUTER_PROVIDERS
]);
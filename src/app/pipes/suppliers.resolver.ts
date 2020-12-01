import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable()
export class SupplierResolver implements Resolve<string> {

    constructor(private route: ActivatedRoute) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("params.get('id')", route.paramMap.get('id'));
        return of('dummy').pipe(delay(50));
    }

}

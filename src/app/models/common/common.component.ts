import { Directive, OnDestroy } from "@angular/core";
import { Observable, of, Subject } from "rxjs";

@Directive()
export class CommonComponent implements OnDestroy {
    ngUnsubscribe: Subject<void> = new Subject<void>();

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }


    canDeactivatePage(): Observable<boolean> {
        return of(true);
    }
}
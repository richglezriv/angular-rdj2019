import { Subject, Observable, EMPTY } from 'rxjs';

/**
 *  To implement the decorator you need to declare a private destroyComponent$ var
 *  Usage: observable.pipe(takeUntil(this.destroyComponent$())).subscribe(..)
 */
export function TakeUntilDestroy(): ClassDecorator {
  
  return (target) => {
    var takeUntilDestroy$ = new Subject<boolean>();
    const baseOnDestroy = target.prototype.ngOnDestroy;

    if (typeof target.prototype.ngOnDestroy !== 'function') {
      console.warn('@TakeUntilDestroy decorator is implemented but no OnDestroy');
    }

    target.prototype.destroyComponent$ = () => {
      takeUntilDestroy$ = takeUntilDestroy$ && takeUntilDestroy$.observers ?
        takeUntilDestroy$ : new Subject<boolean>();
      return takeUntilDestroy$.asObservable();
    };

    target.prototype.ngOnDestroy = () => {
      if (baseOnDestroy) {
        baseOnDestroy();
      }
      takeUntilDestroy$.next(true);
      takeUntilDestroy$.unsubscribe();
    };
  };

}

import { Component } from '@angular/core';
import { fromEvent, Observable, concat, of, from } from 'rxjs';
import { mergeMap, map, first, filter, delay, groupBy, reduce, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  ngOnInit() {
    // 1 task
    console.log('from');
    from([1, 2, 3])
      .subscribe(
        (x) => {console.log(x)}
      );

    console.log('of'); 
    of([1, 2, 3])
      .pipe(
        mergeMap(x => x)
      )
      .subscribe(
        (x) => {console.log(x)}
      );


    // 2 task
    concat(
      of(100), of(0.5)
    )
    .pipe(reduce((acc, val) => acc * val))
    .subscribe(x => { console.log(`Multiple = ${x}`) });


    // 3 task
    fromEvent(document, 'click')
      .subscribe( (event:MouseEvent) => {
        console.log(`X: ${ event.screenX }, Y: ${ event.screenY }`);
      });

    // 4 task
    const observable1 = Observable.create(observer => {
      setTimeout(() => {
        observer.next('resolved!');
      }, 1000)
    });

    observable1.subscribe(x => {console.log(x)});

    // 5 task

    const number = Math.round(Math.random() * 100);

    const hot = Observable.create(observer => {
      observer.next(number);
    });

    const cold = Observable.create(observer => {
      observer.next(Math.round(Math.random() * 150));
    });

    hot.subscribe(x => {console.log(x)});
    cold.subscribe(x => {console.log(x)});

    // 6 task
    from([10, 100, 1000])
      .pipe(
        map(x => Math.log(x))
      )
      .subscribe(
        (val) => {console.log(val)}
      );


    // 7 task
    from(['Richard', 'Erlich', 'Dinesh', 'Gilfoyle'])
      .pipe(first())
      .subscribe(
        (x) => {console.log(x)}
      );
    
    // 9 task
    const names = of('Sharon', 'Sue', 'Sally', 'Steve');
    names
      .pipe(
      filter(x => x.length === 5)
      )
      .subscribe(
        (val) => {console.log(val)}
      );

    // 10 task
    const observable2 = Observable.create( observer => {
        observer.next( 'good' )
        observer.next( 'great' )
        observer.next( 'grand' )
        throw 'catch me!'
        observer.next( 'wonderful' )
     });

     observable2.subscribe(
       (value) => {console.log(value)},
       (e) => {console.error(e)}
     );

     // 11 task
     let notifications = [ 
      { userId: 1, name: 'A1', delay: 100 }, // should be shown
      { userId: 1, name: 'A2', delay: 1500 }, // shouldn't be shown
      { userId: 1, name: 'A3', delay: 2500 }, // shouldn't be shown
      { userId: 1, name: 'A4', delay: 3500 }, // should be shown
      { userId: 2, name: 'B1', delay: 200 }, // should be shown
      { userId: 2, name: 'B2', delay: 300 }, // shouldn't be shown
      { userId: 2, name: 'B3', delay: 3500 }, // should be shown
     ]
     
     from(notifications).pipe(
      mergeMap((notif) => {
        return of(notif).pipe(delay(notif.delay));
      }),
      groupBy(x => x.userId),
      mergeMap(group => group.pipe(throttleTime(3000)))
     )
     .subscribe(x => {console.log(x)})
  }
}
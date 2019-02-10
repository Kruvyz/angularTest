import { Component } from '@angular/core';
import { fromEvent, Observable, concat, of, from } from 'rxjs';
import { mergeMap, map, first, filter } from 'rxjs/operators';

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
      .subscribe({
        next(x) {console.log(x)}
      });

    console.log('of'); 
    of([1, 2, 3])
      .pipe(
        mergeMap(x => x)
      )
      .subscribe({
        next(x) {console.log(x)}
      });

    // concatMapTo(
    //   of(100), of(0.5)
    // ) .subscribe()

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

    // 6 task
    from([10, 100, 1000])
      .pipe(
        map(x => Math.log(x))
      )
      .subscribe({
        next(val) {console.log(val)}
      });


    // 7 task
    from(['Richard', 'Erlich', 'Dinesh', 'Gilfoyle'])
      .pipe(first())
      .subscribe({
        next(x) {console.log(x)}
      });
    
    // 9 task
    const names = of('Sharon', 'Sue', 'Sally', 'Steve');
    names
      .pipe(
      filter(x => x.length === 5)
      )
      .subscribe({
        next(val) {console.log(val)}
      });

    // 10 task
    const observable2 = Observable.create( observer => {
        observer.next( 'good' )
        observer.next( 'great' )
        observer.next( 'grand' )
        throw 'catch me!'
        observer.next( 'wonderful' )
     });

     observable2.subscribe({
       next(value) {console.log(value)},
       error(e) {console.error(e)}
     });


  }
}
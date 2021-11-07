import * as fs from 'fs';
import { Observable, Subscriber } from 'rxjs';


export function readFile<T>(path: string): Observable<T> {
  return new Observable(
    (subscriber: Subscriber<T>) => {
      fs.readFile(
        path, 
        null, 
        (err, data: Buffer) => {
          if (err) {
            subscriber.error(err);
            return;
          }
          try {
            subscriber.next(
              JSON.parse(
                data.toString()
              )
            );
            subscriber.complete();
          } catch(e) {
            subscriber.error({ message: 'JSON parse error, check file with data' });
          }
        }
      );
    }
  );
}

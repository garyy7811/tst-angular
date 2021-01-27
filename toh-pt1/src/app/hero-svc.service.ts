import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroSVCService {

  constructor(private messageService: MessageService) {
  }

  getHeroLst(): Observable<Hero[ ]> {
    this.messageService.add( 'hero service =====  fetched Heros ..' );
    return of(HEROES);
  }
}

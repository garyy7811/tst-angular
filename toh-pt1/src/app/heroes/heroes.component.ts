import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroSVCService} from '../hero-svc.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*
  hero = 'Windstorm';
  */
  hero: Hero = {
    shirt: {button: 7},
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroSVCService, private  messageService: MessageService) {
  }

  ngOnInit() {
    this.heroService.getHeroLst().subscribe(heros => {
      this.heroes = heros;
    });
  }


  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add( `selected .... ${hero.id} -- ${hero.name} == ${hero.shirt.button}` );
  }
}

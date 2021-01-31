import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroSVCService } from '../hero-svc.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroSVCService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroLst()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}

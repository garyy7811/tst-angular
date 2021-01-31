import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HeroSVCService} from '../hero-svc.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {


  @Input() selectedHero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroSVCService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.selectedHero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}

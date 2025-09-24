import { ChangeDetectorRef } from '@angular/core';
import { Heroes } from './heroes';
import { HeroService } from '../../services/hero-service/hero.service';
import { Hero } from '../hero/hero';
import { Ihero } from '../../models/ihero';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

describe('heroes component', () => {
  let cdrMock: jasmine.SpyObj<ChangeDetectorRef>,
    heroServiceMock: jasmine.SpyObj<HeroService>,
    hereCommponent: Heroes;
  beforeEach(() => {
    let heros:Ihero[] = [
      {
        id: 1,
        name: 'Bat',
        strength: 10,
      },

      {
        id: 2,
        name: 'Suber',
        strength: 8,
      }
    ];
    heroServiceMock = jasmine.createSpyObj([
      'getHeroes',
      'addHero',
      'deleteHero',
    ]);
    cdrMock = jasmine.createSpyObj(['detectChanges']);
    hereCommponent = new Heroes(heroServiceMock, cdrMock);
    heroServiceMock.getHeroes.and.returnValue(of(heros));
  });
  it('ng onit called ', () => {
    hereCommponent.ngOnInit();
    expect(heroServiceMock.getHeroes).toHaveBeenCalled();
  });
});

import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor']
  public deletedHero?: string;

  reomoveLastHero(): void{
    this.deletedHero = this.heroNames.pop();
  }
}

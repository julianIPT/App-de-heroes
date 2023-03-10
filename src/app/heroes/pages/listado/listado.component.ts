import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent {

heroes: Heroe[]= [];

  constructor (private heresServices:HeroesService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('list heroes');

    this.heresServices.getHeroes().subscribe( (data: Heroe[]) => {
      console.log(data);

      this.heroes = data;
    });
  }
}

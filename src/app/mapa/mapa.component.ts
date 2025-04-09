import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {

  constructor(private ActivatedRoute: ActivatedRoute) {
    this.ActivatedRoute.params.subscribe(params => {
      console.log(params)
    })
  }

}

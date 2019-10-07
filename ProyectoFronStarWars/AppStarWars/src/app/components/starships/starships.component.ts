import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { starshipsInterface } from 'src/app/models/starships-interfaces';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private starShips: starshipsInterface ={
    name: '',
    model: '',
    manufacturer: '',
    cost_in_credits: '',
    length: '',
    max_atmosphering_speed: '',
    crew: '',
    passengers: '',
    cargo_capacity: '',
    consumables: '',
    hyperdrive_rating: '',
    MGLT: '',
    starship_class: '',
    pilots: '',
    films: ''
    
  }

  ngOnInit() {
    this.getListStarShips();

  }

  getListStarShips(){
    this.dataApi.getAllStarships().subscribe((starShips: starshipsInterface) =>(this.starShips = starShips));
  }


}

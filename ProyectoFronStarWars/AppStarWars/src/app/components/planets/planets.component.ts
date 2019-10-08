import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { PlanetsInterface } from 'src/app/models/planets-interfaces';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private planets: PlanetsInterface = {
    name: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climate: '',
    gravity: '',
    terrain: '',
    surface_water: '',
    population: '',
    residents: [],
    created: '',
    edited: '',
    URL: '',
  };
  ngOnInit() {
    this.getListPlanets();

  }

  getListPlanets() {
    this.dataApi.getAllPlanets().subscribe((planets: PlanetsInterface) => (this.planets = planets));
  }

}

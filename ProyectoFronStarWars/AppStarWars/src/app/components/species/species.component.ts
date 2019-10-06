import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { SpeciesInterface } from 'src/app/models/species-interfaces';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private species: SpeciesInterface ={
    name: '',
    classification: '',
    designation: '',
    average_height: '',
    skin_colors: '',
    hair_colors: '',
    eye_colors: '',
    average_lifespan: '',
    homeworld: '',
    language: '',
    
  }

  ngOnInit() {
    this.getListSpecies();

  }

  getListSpecies(){
    this.dataApi.getAllSpecies().subscribe((species: SpeciesInterface) =>(this.species = species));
  }

}

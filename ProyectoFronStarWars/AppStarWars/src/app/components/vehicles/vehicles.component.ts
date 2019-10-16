import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { vehiclesInterface } from 'src/app/models/vehicles-interface';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  filterVehicles = '';
  private vehicles: vehiclesInterface ={
    name: '',
    model: '',
    manufacturer: '',
    cost_in_credits: '',
    max_atmosphering_speed: '',
    crew: '',
    passengers: '',
    cargo_capacity: '',
    consumables: '',
    vehicle_class: ''
    
  }

  ngOnInit() {
    this.getListVehicles();

  }

  getListVehicles(){
    this.dataApi.getAllVehicles().subscribe((vehicles: vehiclesInterface) =>(this.vehicles = vehicles));
  }

}

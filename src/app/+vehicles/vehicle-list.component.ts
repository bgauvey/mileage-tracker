import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { VehicleService, IVehicle } from '../core/vehicles';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  vehicles: Observable<IVehicle[]>;

  constructor(private router: Router, private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicles = this.vehicleService.getAll();
  }

  addNew(): void {
    this.router.navigate(['/vehicle'], { queryParams: { id: 'new' } });
  }

  gotoDetail(id: number): void {
    this.router.navigate(['/vehicle'], { queryParams: { id: id } });
  }

  getDate(value: number): string {
    return new Date(value).toLocaleDateString(`en-US`);
  }
}

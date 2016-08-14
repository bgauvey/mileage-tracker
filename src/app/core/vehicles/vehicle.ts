export interface IVehicle {
    $key?: string;
    make: string;
    model: string;
    year: string;
    createdAt: number;
}

export class Vehicle implements IVehicle {
    make: string;
    model: string;
    year: string;
    createdAt: number = firebase.database['ServerValue']['TIMESTAMP'];

    constructor(make: string, model: string, year: string) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

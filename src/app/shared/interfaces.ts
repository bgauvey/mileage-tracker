export interface IMilageLog {
    id: number;
    date: Date;
    odometer: number;
    gallons: number;
    costPerGallon: number;
    totalCost: number;
    vehicleId: number;
}

export interface IVehicle {
    id: number;
    make: string;
    model: string;
    year: number;
}
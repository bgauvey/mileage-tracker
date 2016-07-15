export enum LogType {
    Fuel,
    Repair,
    Service
}

export interface ILog {
    $key?: string;
    createdAt: number;
    description: string;
    odometer: number;
    gallons: number;
    costPerGallon: number;
    totalCost: number;
    vehicleId: number;
    logType: number;
}

export class Log implements ILog {
    createdAt: number = firebase.database['ServerValue']['TIMESTAMP'];
    odometer: number;
    gallons: number;
    costPerGallon: number;
    totalCost: number;
    vehicleId: number;
    logType: LogType;
    description: string;

    constructor(
        odometer: number,
        gallons: number,
        costPerGallon: number,
        totalCost: number,
        vehicleId: number,
        logType: number,
        description: string) {
        this.odometer = odometer;
        this.gallons = gallons;
        this.costPerGallon = costPerGallon;
        this.totalCost = totalCost;
        this.vehicleId = vehicleId;
        this.logType = logType;
        this.description = description;
    }
}

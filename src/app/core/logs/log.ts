import * as firebase from 'firebase';

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
    vehicleId: string;
    logType: number;
}

export class Log implements ILog {
    createdAt: number = <number> firebase.database.ServerValue.TIMESTAMP;
    odometer: number;
    gallons: number;
    costPerGallon: number;
    totalCost: number;
    vehicleId: string;
    logType: LogType;
    description: string;

    constructor(
        odometer: number,
        gallons: number,
        costPerGallon: number,
        totalCost: number,
        vehicleId: string,
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

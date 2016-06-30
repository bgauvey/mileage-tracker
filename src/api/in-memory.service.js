"use strict";
var InMemoryService = (function () {
    function InMemoryService() {
    }
    /**
    * Creates fresh copy of data each time.
    * Safe for consuming service to morph arrays and objects.
    */
    InMemoryService.prototype.createDb = function () {
        var miles = [
            {
                "id": 1,
                "date": "06/07/2016",
                "odometer": 52006,
                "gallons": 21.5,
                "costPerGallon": 1.91,
                "totalCost": 41.07,
                "vehicleId": 1
            },
            {
                "id": 2,
                "date": "05/10/2016",
                "odometer": 51980,
                "gallons": 21.5,
                "costPerGallon": 1.91,
                "totalCost": 41.07,
                "vehicleId": 1
            },
            {
                "id": 3,
                "date": "06/15/2016",
                "odometer": 52159,
                "gallons": 21.5,
                "costPerGallon": 1.91,
                "totalCost": 41.07,
                "vehicleId": 1
            },
            {
                "id": 4,
                "date": "06/23/2016",
                "odometer": 52299,
                "gallons": 21.5,
                "costPerGallon": 1.91,
                "totalCost": 41.07,
                "vehicleId": 1
            },
            {
                "id": 5,
                "date": "05/20/2016",
                "odometer": 52000,
                "gallons": 21.5,
                "costPerGallon": 1.91,
                "totalCost": 41.07,
                "vehicleId": 1
            }
        ];
        var vehicles = [
            {
                "id": 1,
                "make": "Toyota",
                "model": "Tundra",
                "year": 2012
            },
            {
                "id": 2,
                "make": "Nissan",
                "model": "Frontier",
                "year": 2015
            }
        ];
        return { miles: miles, vehicles: vehicles };
    };
    return InMemoryService;
}());
exports.InMemoryService = InMemoryService;
//# sourceMappingURL=in-memory.service.js.map
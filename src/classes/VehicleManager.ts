import inquirer from "inquirer";
import Car from "./Car.js";
import Truck from "./Truck.js";
import Motorbike from "./Motorbike.js";
import Vehicle from "./Vehicle.js";
import Wheel from "./Wheel.js";

class VehicleManager {
  private vehicles: Vehicle[] = [];

  async createVehicle() {
    const { type } = await inquirer.prompt([
      {
        type: "list",
        name: "type",
        message: "What type of vehicle do you want to create?",
        choices: ["Car", "Truck", "Motorbike"],
      },
    ]);

    const { vin, color, make, model, year, weight, topSpeed } = await inquirer.prompt([
      { type: "input", name: "vin", message: "Enter VIN:" },
      { type: "input", name: "color", message: "Enter color:" },
      { type: "input", name: "make", message: "Enter make:" },
      { type: "input", name: "model", message: "Enter model:" },
      { type: "number", name: "year", message: "Enter year:" },
      { type: "number", name: "weight", message: "Enter weight (lbs):" },
      { type: "number", name: "topSpeed", message: "Enter top speed (mph):" },
    ]);

    let vehicle: Vehicle;
    if (type === "Car") vehicle = new Car(vin, color, make, model, year, weight, topSpeed, [new Wheel(), new Wheel(), new Wheel(), new Wheel()]);
    else if (type === "Truck") vehicle = new Truck(vin, color, make, model, year, weight, topSpeed, 10, [new Wheel(), new Wheel(), new Wheel(), new Wheel(), new Wheel(), new Wheel()]);
    else vehicle = new Motorbike(vin, color, make, model, year, weight, topSpeed, [new Wheel(), new Wheel()]); 

    this.vehicles.push(vehicle);
    console.log("Vehicle created successfully!");
  }
}

export default VehicleManager;

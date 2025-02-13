import Vehicle from "./Vehicle.js";
import Wheel from "./Wheel.js";

// Truck class extending Vehicle
class Truck extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  cargoCapacity: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    cargoCapacity: number,
    wheels: Wheel[]
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.cargoCapacity = cargoCapacity;
    this.wheels = wheels.length === 6 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  override printDetails(): void {
    console.log(`Truck - ${this.make} ${this.model} (${this.year})`);
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Cargo Capacity: ${this.cargoCapacity} tons`);
  }

  loadCargo(): void {
    console.log(`${this.make} ${this.model} is loading ${this.cargoCapacity} tons of cargo.`);
  }
}

// Export Truck class
export default Truck;

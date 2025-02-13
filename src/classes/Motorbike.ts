import Vehicle from "./Vehicle.js";
import Wheel from "./Wheel.js";

// Motorbike class extending Vehicle
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  // hasSidecar: boolean;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    // hasSidecar: boolean,
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
    // this.hasSidecar = hasSidecar;
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
  }

  override printDetails(): void {
    console.log(`Motorbike - ${this.make} ${this.model} (${this.year})`);
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    // console.log(`Has Sidecar: ${this.hasSidecar ? "Yes" : "No"}`);
  }

  doWheelie(): void {
    console.log(`${this.make} ${this.model} is performing a wheelie!`);
  }
}

// Export Motorbike class
export default Motorbike;

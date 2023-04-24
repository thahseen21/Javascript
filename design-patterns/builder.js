function Shop() {
  this.construct = function (builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  };
}

function CarBuilder() {
  this.car = null;

  this.step1 = () => {
    this.car = new Car();
  };

  this.step2 = () => {
    this.car.addTyre();
  };

  this.get = () => {
    return this.car;
  };
}

function Car() {
  this.doors = 0;

  this.addTyre = function () {
    this.doors = 4;
  };

  this.say = function () {
    console.log(`I am a ${this.doors} car`);
  };
}

function TruckBuilder() {
  this.truck = null;

  this.step1 = () => {
    this.truck = new Truck();
  };

  this.step2 = () => {
    this.truck.addTyre();
  };

  this.get = () => {
    return this.truck;
  };
}

function Truck() {
  this.doors = 0;

  this.addTyre = function () {
    this.doors = 2;
  };

  this.say = function () {
    console.log(`I am a ${this.doors} truck`);
  };
}

function run() {
  var shop = new Shop();
  var carBuilder = new CarBuilder();
  var car = new shop.construct(carBuilder);

  var truckBuilder = new TruckBuilder();
  var truck = new shop.construct(truckBuilder);

  console.log(car);
  console.log(truck);
}

run();

console.log("Hello World!");
class Vehicle {

  //constructor is a method for a class
  constructor(model, make, color, year, licensePlate,wheelCount,cylinders,miles,fuelType) {
    this.model = model;
    this.color = color;
    this.make = make;
    this.year = year;
    this.licensePlate = licensePlate;
    this.wheelCount = wheelCount;
    this.cylinders = cylinders;
    this.miles = miles;
    this.fuelType = fuelType;

  }
  showModel(){
    console.log("The model is "+this.model);
  }
  showColor(){
    console.log("The color is "+this.color);
  }
  showMake() {
    console.log("The make is "+this.make);
  }
  showYear() {
    console.log("The Year is "+this.year);
  }
  getModel(){return this.model;}
  setModel(data){this.model = data;}
  getColor(){return this.color;}
  setColor(data){this.color = data;}
  getMake(){return this.make;}
  setMakemake(data){this.make = data;}
  getYear(){return this.year;}
  setYear(data){this.year = data;}
  getLicensePlate(){return this.licensePlate;}
  setLicensePlate(data){this.licensePlate = data;}
  getWheelCount(){return this.wheelCount;}
  setWheelCount(data){this.wheelCount = data;}
  getCylinders(){return this.cylinders;}
  setCylinders(data){this.cylinders = data;}
  getMiles(){return this.miles;}
  setMiles(data){this.miles = data;}
  getFuelType(){return this.FuelType;}
  setFuelType(data){this.FuelType = data;}
}
class Car extends Vehicle{
  constructor(model, make, color, year, licensePlate,wheelCount,cylinders,miles,fuelType, trunkSize,reverseSpeed, tankSize){
    super(model, make, color, year, licensePlate,wheelCount,cylinders,miles,fuelType, trunkSize,reverseSpeed, tankSize);// Must type this to inherits
    this.trunkSize=trunkSize;
    this.reverseSpeed=reverseSpeed;
    this.tankSize=tankSize;
  }
  getTrunkSize(){return this.trunkSize;}
  setTrunkSize(data){this.trunkSize = data;}
  getReverseSpeed(){return this.reverseSpeed;}
  setReverseSpeed(data){this.reverseSpeed = data;}
  getTankSize(){return this.tankSize;}
  setTankSize(data){this.tankSize = data;}
}
class ElectricCar extends Vehicle{
  constructor(model, make, color, year, licensePlate,wheelCount,cylinders,miles,fuelType, batterySize, currentCharge, batteryAge){
    super(model, make, color, year, licensePlate,wheelCount,cylinders,miles,fuelType, batterySize, currentCharge, batteryAge);
    this.batterySize=batterySize;
    this.currentCharge=currentCharge;
    this.batteryAge=batteryAge;
  getBatterySize(){return this.batterySize;}
  setBatterySize(data){this.batterySize = data;}
  getcurrentCharge(){return this.currentCharge;}
  setcurrentCharge(data){this.currentCharge = data;}
  getBatteryAge(){return this.batteryAge;}
  setBatteryAge(data){this.batteryAge = data;}
  }
class Bike extends Vehicle{
    constructor(model, make, color, year, bikeType,numberOfGears, wheelSize, material){
      super(model, make, color, year, bikeType,numberOfGears, wheelSize, material);// Must type this to inherits
      this.bikeType= bikeType;
      this.numberOfGears=numberOfGears;
      this.wheelSize=wheelSize;
      this.material=material;
      }
  }
class Truck extends Vehicle{
  constructor(model, make, color, year, licensePlate,wheelCount,cylinders,miles,fuelType, tanksize, fuelType, topSpeed){
    super(model, make, color, year, licensePlate,wheelCount,cylinders,miles,fuelType, tanksize, fuelType, topSpeed);// Must type this to inherits
    this.trunkSize=trunkSize;
    this.fuelType=fuelType;
    this.topSpeed=topSpeed;
  }
  getTrunkSize(){return this.trunkSize;}
  setTrunkSize(data){this.trunkSize = data;}
  getFuelType(){return this.fuelType;}
  setFuelType(data){this.fuelType = data;}
  getTopSpeed(){return this.topSpeed;}
  setTopSpeed(data){this.topSpeed = data;}
}
class Motocycle extends Vehicle{
  constructor(model, make, color, year, licensePlate,wheelCount,cylinders,miles,fuelType, engineCC, tireSize, tankSize){
    super(model, make, color, year, licensePlate,wheelCount,cylinders,miles,fuelType, engineCC, tireSize, tankSize);// Must type this to inherits
    this.engineCC=engineCC;
    this.tireSize=tireSize;
    this.tankSize=tankSize;
  }
  getEngineCC(){return this.engineCC;}
  setEngineCC(data){this.engineCC = data;}
  getTireSize(){return this.tireSize;}
  setTireSize(data){this.tireSize = data;}
  getTankSize(){return this.tankSize;}
  setTankSize(data){this.tankSize = data;}
}
class Bike extends Vehicle{
    constructor(model, make, color, year, bikeType,numberOfGears, wheelSize, material){
      super(model, make, color, year, bikeType,numberOfGears, wheelSize, material);// Must type this to inherits
      this.bikeType= bikeType;
      this.numberOfGears=numberOfGears;
      this.wheelSize=wheelSize;
      this.material=material;
      }
      getBikeType(){return this.bikeType;}
      setBikeType(data){this.bikeType = data;}
      getNumberOfGear(){return this.NumberOfGear;}
      setNumberOfGear(data){this.NumberOfGear = data;}
      getWheelSize(){return this.wheelSize;}
      setWheelSize(data){this.wheelSize = data;}
      getMaterial(){return this.material;}
      setMaterial(data){this.material = data;}
  }
class Helicopter extends Vehicle{
    constructor(model, make, color, year, typeOfHeli, maxTakeOffWeight,maxRange, maxSpeed, power){
      super(model, make, color, year, typeOfHeli, maxTakeOffWeight,maxRange, maxSpeed, power);// Must type this to inherits
      this.typeOfHeli= typeOfHeli;        this.maxTakeOffWeight=maxTakeOffWeight;
      this.maxRange=maxRange;
      this.maxSpeed=maxSpeed;
      this.power=power;
      }
      
  }


let car1 = new Vehicle("Accord","Honda","Black","2008","car");
let car2 = new Vehicle("Camry","Toyota","Red","2017","car");
let car3 = new Vehicle("x6","BMW","Blue","2019","car");
let car4 = new Vehicle("SLR","Mercedes","Grey","2015","car");
let car5 = new Vehicle("model X","Tesla","White","2018","car");

let legitCar1 = new Car("Volkswagen", "Golf","Silver",2001,"1ASDAS",4,8,50000,"DIESEL");
let legitCar2 = new Car("Elio", "One","Red",2019,"3S0DJAS",3,2,1000,"gasoline");
let bike1 = new Bike("Specialized", "Model1","Silver",2020,"Mountain",12,"18\"","Aluminium");
let heli1 = new Helicopter("Apache", "AH1", "grey", 2004, "military", "21000lb","331miles", "182mph", "2270hp");

// car1.showYear();
// car1.showMake();
// car5.showModel();
// car5.showMake();
// car5.showColor();
// legitCar1.showYear();
// legitCar2.showMake();
// console.log(bike1.material);
// console.log(bike1.wheelSize);
// console.log(heli1.power);

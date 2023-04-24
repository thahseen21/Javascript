function employee(name) {
  this.name = name;
  this.sayHi = () => {
    console.log(`Hi I'm ${this.name}, Employee`);
  };
}

function employeeFactory() {
  this.create = (name) => {
    return new employee(name);
  };
}
function vendor(name) {
  this.name = name;
  this.sayHi = () => {
    console.log(`Hi I'm ${this.name}, Vendor`);
  };
}

function vendorFatory() {
  this.create = (name) => {
    return new vendor(name);
  };
}

run = () => {
  var persons = [];
  var empFactory = new employeeFactory();
  var vendorFactory = new vendorFatory();

  persons.push(empFactory.create("Mohammed Thahseen N"));
  persons.push(vendorFactory.create("Potato"));
  persons.push(empFactory.create("Pineapple"));
  persons.push(vendorFactory.create("Mango"));

  persons.forEach((element) => {
    element.sayHi();
  });
};

run();

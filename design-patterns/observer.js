function Click() {
  this.handlers = []; // observers
}

Click.prototype = {
  subscribe: function (fn) {
    this.handlers.push(fn);
  },

  unsubscribe: function (fn) {
    this.handlers = this.handlers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
  },

  fire: function (o, thisObj) {
    var scope = thisObj || window;
    this.handlers.forEach(function (item) {
      item.call(scope, o);
    });
  },
};

function run() {
  var clickHandler = function (item) {
    console.log("fired: " + item);
  };
  var anotherClickHandler = function (item) {
    console.log("Potato is firing: " + item);
  };

  var click = new Click();

  click.subscribe(clickHandler);
  click.fire("event #1", this);
  click.unsubscribe(clickHandler);
  click.fire("event #2", this);
  click.subscribe(clickHandler);
  click.subscribe(anotherClickHandler);
  click.fire("event #3", this);
}

run();

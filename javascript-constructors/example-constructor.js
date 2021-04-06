function ExampleConstructor() {}

console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof of ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var example1 = new ExampleConstructor();

console.log('value of example1:', example1);

var isInstance = example1 instanceof ExampleConstructor;

console.log('value of isInstance:', isInstance);

class Car {
    model;
    price;
    wheels;  // attributes/membervariables/ global variables in the class
 
    start(){
        console.log("Car starts")
    }
 
    stop(){
        console.log("Car stops")
    }
   
}
 
var a =new Car();
a.model="BMW";
a.price=20000;
a.wheels=4;

 
console.log("model of the car is "+a.model)
console.log("wheels="+a.wheels)
console.log("price ="+a.price)
a.start();
a.stop();
 
var b =new Car();
b.model="Skoda"
b.price=10000
b.wheels=4;
 
console.log(b.model)
console.log(b.price)
console.log(b.wheels)
b.start();
b.stop();
 
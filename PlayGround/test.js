// var font = {
//     col: "red"
//     ,get color(){
//         return this.col;
//     }
//     ,set color(param){
//         this.col = param;
//     }
// };
// font.color = "Blue";
// console.log(font.color);
function Car(color) {
    this.color = color;
}
Car.drive = function (){
    console.log("driving a car ");
};

var redCar = new Car("red");
//var redCar = Object.create(Car) //inherited
//redCar.drive();

var obj1 = {a:1};
var obj2 = obj1;

obj2.a = 5;
console.log(obj1.a);
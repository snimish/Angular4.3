"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function carDetails(car) {
    console.log(`Details of car are: Name = ${car.name}, Price = ${car.price}, Engine = ${car.engine}`);
}
exports.carDetails = carDetails;
function bookDrive(car) {
    console.log(`Booked car is: Name = ${car.name}`);
}
exports.bookDrive = bookDrive;

import {Car} from "./interface"

export function carDetails(car: Car): void{
    console.log(`Details of car are: Name = ${car.name}, Price = ${car.price}, Engine = ${car.engine}`);
}

export function bookDrive(car: Car): void{
    console.log(`Booked car is: Name = ${car.name}`);
}
import {Car} from "./interface"
import {carDetails, bookDrive} from "./functions"

let mCar: Car = { name: "Maruti K10", engine: "1000cc", price: 475000};
carDetails(mCar);
bookDrive(mCar);
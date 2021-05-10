import { Weather } from "./weather";

interface Current {
    dt:string,
    temp:number,
    wind_speed:number,
    weather:Weather[]

 }

export type {Current}
import { Weather } from "./weather";

interface Daily {
    dt:string,
    temp:{
        day:number,
        min:number,
        max:number
    },
    wind_speed:number,
    weather:Weather[]

 }

export type {Daily}
import { Current } from "./current";
import { Daily } from "./daily";

interface WeatherInterface {
    current:Current,
    daily:Daily[]
}
export type {WeatherInterface}
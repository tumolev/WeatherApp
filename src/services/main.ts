import Http from '../utils/Http';
import {app_id as appId} from '../../app.json';
import { WeatherInterface } from '../interfaces/Weather';
export const getWeatherData = (lon: number, lat: number) =>
  Http.get<WeatherInterface>('onecall?exclude=hourly,minutely,alerts&units=metric', 
  {
    params:{
      lon,
      lat,
      appid:appId
    }
    
  });

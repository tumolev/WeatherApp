import moment from "moment";
import React, { FC } from "react";
import { Image, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Current } from "../../interfaces/Weather/current";
import { Daily } from "../../interfaces/Weather/daily";
import styles from "./styles";


 const WeatherDayComponent: FC<{day:Daily | Current,setSelectedDay:any,selectedDay:string}> = ({day,setSelectedDay,selectedDay}) => {
    return (
      <TouchableOpacity disabled={typeof day.temp=='number'} onPress={()=> setSelectedDay(day.dt)} activeOpacity={1} style={[styles.currentContainer,{backgroundColor:selectedDay==day.dt?'red':'green'}]}>
      <Text style={styles.currentTitle}>{typeof day.temp=='number'?"Today":moment.unix(parseInt(day.dt)).format('MMMM D')}</Text>
      <View>
        <Image style={styles.weatherImage} source={{uri:'http://openweathermap.org/img/wn/'+day.weather[0].icon+'@2x.png'}}/>
      </View>
      <View>
        <Text style={styles.currentText}>{typeof day.temp=='number'?"Current":"Average"} Tempretature: {typeof day.temp=='number' ?day.temp:day.temp.day} C</Text>
      {typeof day.temp!=='number' &&
        <View>
        <Text style={styles.currentText}>Min Tempretature: {day.temp.min} C</Text>
        <Text style={styles.currentText}>Max Tempretature: {day.temp.max} C</Text>
        </View>
 }
        <Text style={styles.currentText}>Wind Speed: {day.wind_speed} m/s</Text>
      </View>
    </TouchableOpacity>
    ) }
   


  export default WeatherDayComponent
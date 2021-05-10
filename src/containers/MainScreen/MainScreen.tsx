import moment from "moment";
import React, { FC, useMemo, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Image, Text,  TouchableOpacity, View } from "react-native";
import WeatherDayComponent from "../../components/WeatherDayComponent";
import { WeatherInterface } from "../../interfaces/Weather";
import { getWeatherData } from "../../services/main";
import styles from "./styles";

 const MainScreen: FC = () => {
   const [days,setDays] = useState<WeatherInterface | null>(null)
   const [selectedDay, setSelectedDay] = useState <string>('')

   
   const handleInfo = async () => {
    try {
        const {data} = await getWeatherData(40.177200,44.503490);
        setDays(data)
        setSelectedDay(data?.daily[1].dt)  
    } catch (e) {

    }
}

   React.useEffect(() => {
    handleInfo()
}, []);


const computeTheDistanceBetweenDays  = (day:string) => {

  Alert.alert('UseMemo Effect', 'It will take several seconds for new day selection to calculate the difference, but for checking old selection the loop will not run.')
for(let i =0;i<6000;i++){
  console.log('a')

}
    let today = moment()
    let thatDay = moment.unix(parseInt(day))
return  thatDay.diff(today,'days')+1  

}


const memoizedValue = useMemo(() => computeTheDistanceBetweenDays(selectedDay), [selectedDay]);

    return (
<View style={styles.main}>
  {!days &&
  <ActivityIndicator size='large' />}

 <Text style={styles.title}>Weather in Yerevan </Text>
 <Text style={styles.title}>Difference Between Days {memoizedValue}</Text>

{days &&
  <WeatherDayComponent selectedDay={selectedDay} day={days?.current} setSelectedDay={setSelectedDay}/>
 }

{days &&
  <View style={styles.flatlistView}>
    <FlatList
     horizontal 
     showsHorizontalScrollIndicator={false}
     keyExtractor={(item, index) => index.toString()}
     data={days?.daily.slice(1,6)} 
     renderItem={(item)=>{ return ( <WeatherDayComponent selectedDay={selectedDay} setSelectedDay={setSelectedDay} day={item.item}/>) }} />
  </View>
 }

  
</View>
    );
  };

  export default MainScreen


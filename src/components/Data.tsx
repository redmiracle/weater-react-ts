import Form from "./Form.tsx";
import Weather from "./Weather.tsx";
import {useState} from "react";
import {api_key, base_url} from "../utils/constants.ts";



export interface weatherInfoType{
    country: string;
    city: string;
    temp:number;
    pressure: number;
    sunset:Date;
}
const InitStateWeather={
        country:'',
        city: '',
        temp:0,
        pressure: 0,
        sunset:new Date(),
}

const Data = () => {

    const [weatherInfo, setWeatherInfo] = useState<weatherInfoType>(InitStateWeather);
    const [message, setMessage] = useState('Enter city name');

    const getWeather:(city:string)=>void = city => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                setWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000)
                })
                setMessage('')
            })
            .catch(e => {
                console.log(e);
                setMessage('Enter correct city name')
            })
    }

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather message={message} weather={weatherInfo}></Weather>
        </div>
    );
};

export default Data;
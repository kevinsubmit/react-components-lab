import "./WeatherForecast.css";

const WeatherForecasts = (props) => {
  return (
    // the first solution
    // <div className="weather">
    //   <h2>Day of the Week:{props.weatherForecast.day}</h2>
    //   <img src={props.weatherForecast.img} alt={props.weatherForecast.imgAlt} />
    //   <p>
    //     <span>conditions: </span>{props.weatherForecast.conditions}
    //   </p>
    //   <p>
    //     <span>time: </span>{props.weatherForecast.time}
    //   </p>
    // </div>

    // the second solution
    <>
      {props.weatherForecasts.map((weatherForecast) => (
        <div className="weather" key={weatherForecast.day}>
          <h2>Day of the Week:{weatherForecast.day}</h2>
          <img
            src={weatherForecast.img}
            alt={weatherForecast.imgAlt}
          />
          <p>
            <span>conditions: </span>
            {weatherForecast.conditions}
          </p>
          <p>
            <span>time: </span>
            {weatherForecast.time}
          </p>
        </div>
      ))}
    </>
  );
};
export default WeatherForecasts;

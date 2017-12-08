import React from "react";
import ReactDOM from "react-dom";
import photo1 from "./feel.png";
import photo2 from "./rain.png";
import photo3 from "./wind.png";
import photo4 from "./weather-bottom.png";
//====================================
class WeatherInfo extends React.Component
{
	constructor(props) {
    super(props);
    this.state = {
				  };
  }

  render() {
		console.log(this.props.weather.id);
    return (
      <div className="weatherInfo">
        <div className="container">
          <div className="up">
            <div className="left">
              <div className="date">Friday, Sept 08th</div>
              <div className="place">{this.props.localisation[0].formatted_address}</div>
            </div>
            <div className="center">
              <div className="temp">{this.props.weather.temp}</div>
              <span>low:{this.props.weather.high} </span><span> high:{this.props.weather.high}</span>
              <div className="climate">{this.props.weather.feel}</div>
            </div>
            <div className="right">
              <div>updated : 07/12/2017</div>
              </div>
          </div>
          <div className="down">
            <div className="desc">
              <div className="img"><img src={photo1}></img></div>
              <div>Real feel</div>
              <div>{this.props.weather.realFeel}°</div>
            </div>
            <div className="desc">
            <div className="img"><img src={photo2}></img></div>
            <div>Chances of rain</div>
            <div>{this.props.weather.chanceRain}</div>
            </div>
            <div className="desc">
            <div className="img"><img src={photo3}></img></div>
            <div>Wind speed</div>
            <div>{this.props.weather.windSpeed}</div>
          </div>
          <div className="weather-bottom"><img src={photo4} ></img></div>
        </div>

        </div>
    	</div>
	    );
	  }

}
//====================================
export default WeatherInfo;

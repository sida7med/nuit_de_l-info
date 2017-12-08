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
    return (
      <div className="weatherInfo">
        <div className="container">
          <div className="up">
            <div className="left">
              <div className="date">Saturday, March 26th</div>
              <div className="place">{this.props.localisation[0].formatted_address}</div>
            </div>
            <div className="center">
              <div className="temp">64°F</div>
              <span>low:55 </span><span> hight:55</span>
              <div className="climate">Partly Sunny</div>
            </div>
            <div className="right">
              <div>updated : 07/12/2017</div>
              </div>
          </div>
          <div className="down">
            <div className="desc">
              <div className="img"><img src={photo1}></img></div>
              <div>Real feel</div>
              <div>67°</div>
            </div>
            <div className="desc">
            <div className="img"><img src={photo2}></img></div>
            <div>Chances of rain</div>
            <div>5%</div>
            </div>
            <div className="desc">
            <div className="img"><img src={photo3}></img></div>
            <div>Wind speed</div>
            <div>20MPH</div>
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

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
        <div class="container">
          <div class="up">
            <div class="left">
              <div class="date">Saturday, March 26th</div>
              <div class="place">San Francisco, CA</div>
            </div>
            <div class="center">
              <div class="temp">64°F</div>
              <span>low:55 </span><span> hight:55</span>
              <div class="climate">Partly Sunny</div>
            </div>
            <div class="right">
              <div>updated : 07/12/2017</div>
              </div>
          </div>
          <div class="down">
            <div class="desc">
              <div class="img"><img src={photo1}></img></div>
              <div>Real feel</div>
              <div>67°</div>
            </div>
            <div class="desc">
            <div class="img"><img src={photo2}></img></div>
            <div>Chances of rain</div>
            <div>5%</div>
            </div>
            <div class="desc">
            <div class="img"><img src={photo3}></img></div>
            <div>Wind speed</div>
            <div>20MPH</div>
          </div>
          <div class="weather-bottom"><img src={photo4} ></img></div>
        </div>

        </div>
    	</div>
	    );
	  }

}
//====================================
export default WeatherInfo;

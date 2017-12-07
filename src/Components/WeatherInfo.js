import React from "react";
import ReactDOM from "react-dom";

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
        {this.props.weather[0].formatted_address}
    	</div>
	    );
	  }

}
//====================================
export default WeatherInfo;

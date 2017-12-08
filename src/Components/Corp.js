import React from "react";
import Gallery from "./Gallery";
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";
//import {browserHistory} from "react-router"  ;
//import {Link} from "react-router"  ;
import axios from "axios";
//var imageData = require("./imagedata");

//====================================
class Corp extends React.Component
{
	constructor(props) {
    super(props);
    this.state = {
      searchValue:"",
			localisation: [{
				formatted_address:" ",
				geometry:{
					location:{
						lat: "35.8245029",
						lng: "10.634584"
				}
			}}],
			weather: {currently:{icon:"clear day"}}
				  };
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

	componentDidMount()
  {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=sousse').then(response=>{
      this.setState({localisation:response.data.results});
    })
    .catch(function(error){
      console.log(error);
    }),
		axios.get(`https://api.darksky.net/forecast/a1fc4997d64d78a307a2456130ebc5fa/${this.state.localisation[0].geometry.location.lat},${this.state.localisation[0].geometry.location.lng}`).then(response=>{
      this.setState({weather:response});
    })
    .catch(function(error){
      console.log(error);
    })
		// i couldn't find a solution for the CORS problem with axios in react due to the time
  }
  onChangeSearch(event) {
    let searchValue = this.state.searchValue;
    searchValue = event.target.value;
    this.setState({ searchValue });
  }

  render() {
		console.log(this.state.localisation[0].geometry.location.lat);
		console.log(this.state.weather.currently.icon);
    let filteredArticles = this.props.articles.filter(
       (article)=>{return (article.location.toLowerCase().indexOf(this.state.searchValue.toLowerCase())!==-1)&&(this.state.searchValue);}
      );
      filteredArticles = filteredArticles.map((article)=><div key={article.title}><img src={""+article.photo+""} width="300px" height="300px"></img></div>);
    let articles = this.props.articles.map((article)=><div key={article.id}><img src={""+article.photo+""} width="300px" height="300px"></img></div>);

		if (filteredArticles.length === 0) {
			filteredArticles=articles;
		}
    return (
      <div className="corp">
				<Header searchValue={this.state.searchValue} onChangeSearch={this.onChangeSearch} />
				<WeatherInfo localisation={this.state.localisation} weather={this.state.weather} />
        <Gallery articles={filteredArticles} weather={this.state.weather} />
    	</div>
	    );
	  }

}
//====================================
export default Corp;

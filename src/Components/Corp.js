import React from "react";
import Gallery from "./Gallery";
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";
//import {browserHistory} from "react-router"  ;
import {Link} from "react-router"  ;
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
			weather: {currently:{icon:"clear day"}},
			article:[],
			weatherData:[{_id:0,
	    id: "1",
	    location: " ",
	    temp: " ",
	    low: " ",
	    high: " ",
	    feel: " ",
	    realFeel: " ",
	    chanceRain: " ",
	    windSpeed: " "}]
				  };
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }
// initialisation de l'état et le binding de fonction onChangeSearch
	componentDidMount()
  {
		axios.get('https://nuitdelinfo.herokuapp.com/article').then(response=>{
      this.setState({article:response.data});
    })
    .catch(function(error){
      console.log(error);
    }),
		axios.get('https://nuitdelinfo.herokuapp.com/weather').then(response=>{
      this.setState({weatherData:response.data});
    })
    .catch(function(error){
      console.log(error);
    }),
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
		//réception du json depuis les api ci-dessus
		// Je n'ai pas eu le temps nécessaire pour trouver une solution au problème de CORS axios
  }
  onChangeSearch(event) {
    let searchValue = this.state.searchValue;
    searchValue = event.target.value;
    this.setState({ searchValue });
  }
// Fonction onChangeSearch pour changer l'état selon la valeur du moteur de recherche
  render() {
    let filteredArticles = this.state.article.filter(
       (article)=>{return (article.location.toLowerCase().indexOf(this.state.searchValue.toLowerCase())!==-1)&&(this.state.searchValue);}
      );
      filteredArticles = filteredArticles.map((article)=><div className="warnning" key={article.title}>
				  		<img src={""+article.photo+""} width="300px" height="300px" alt="news"></img>
				 		 <div className="mid">
				    		{article.title}
				  		 </div>
					</div>);
    let articles = this.state.article.map((article)=><div className="warnning" key={article.title}>
			  		<img src={""+article.photo+""} width="300px" height="300px" alt="news"></img>
			 		 <div className="mid">
			    		{article.title}
			  		 </div>
				</div>);
		if (filteredArticles.length === 0) {
			filteredArticles=articles;
		}
		let filteredWeather = this.state.weatherData.filter((weath)=>{return (weath.location.toLowerCase().indexOf(this.state.searchValue.toLowerCase())!==-1)&&(this.state.searchValue);})
		if (filteredWeather.length === 0) {
			filteredWeather=this.state.weatherData;
		}
		//Filtrage des données
		return (
      <div className="corp">
				<Header searchValue={this.state.searchValue} onChangeSearch={this.onChangeSearch} />
				<WeatherInfo localisation={this.state.localisation} weather={filteredWeather[0]} />
        <Gallery articles={filteredArticles} weather={filteredWeather[0]} />
    	</div>
	    );
	  }

}
//Passation des données aux composants fils
//====================================
export default Corp;

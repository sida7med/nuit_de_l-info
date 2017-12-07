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
			weather: [{formatted_address:" "}]
				  };
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

	componentDidMount()
  {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=sousse').then(response=>{
      this.setState({weather:response.data.results});
    })
    .catch(function(error){
      console.log(error);
    })
  }
  onChangeSearch(event) {
    let searchValue = this.state.searchValue;
    searchValue = event.target.value;
    this.setState({ searchValue });
  }

  render() {
		console.log(this.state.weather[0].formatted_address);
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
				<WeatherInfo weather={this.state.weather} />
        <Gallery articles={filteredArticles} />
    	</div>
	    );
	  }

}
//====================================
export default Corp;

import React from "react";
import Gallery from "./Gallery";
import Header from "./Header";
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
			weather: {}
				  };
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

	componentDidMount()
  {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(response=>{
      this.setState({weather:response.data.drinks});
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
    let filteredArticles = this.props.articles.filter(
       (article)=>{return (article.location.toLowerCase().indexOf(this.state.searchValue.toLowerCase())!==-1)&&(this.state.searchValue);}
      );
      filteredArticles = filteredArticles.map((article)=><div key={article.title}><img src={""+article.photo+""} width="300px" height="300px"></img></div>);
    let articles = this.props.articles.map((article)=><div key={article.id}><img src={""+article.photo+""} width="300px" height="300px"></img></div>);
		console.log(filteredArticles);

		if (filteredArticles.length === 0) {
			filteredArticles=articles;
		}
    return (
      <div className="corp">
				<Header searchValue={this.state.searchValue} onChangeSearch={this.onChangeSearch} />
        <Gallery articles={filteredArticles} />
    	</div>
	    );
	  }

}
//====================================
export default Corp;

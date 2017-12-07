import React from "react";

//import {browserHistory} from "react-router"  ;
//import {Link} from "react-router"  ;
//import axios from "axios";
//var imageData = require("./imagedata");

//====================================
class Header extends React.Component
{
	constructor(props) {
    super(props);
    this.state = {
      searchValue:""
				  };
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch(event) {
    let searchValue = this.state.searchValue;
    searchValue = event.target.value;
    this.setState({ searchValue });
  }

  render() {
    let filteredArticles = this.props.articles.filter(
       (article)=>{return (article.title.toLowerCase().indexOf(this.state.searchValue.toLowerCase())!==-1)&&(this.state.searchValue);}
      );
      console.log(filteredArticles);
      filteredArticles = filteredArticles.map((article)=><div key={article.title}>{article.title}</div>);
    let articles = this.props.articles.map((article)=><div key={article.id}>{article.title}</div>);
    return (
      <div className="header">
        {articles}<br/><hr/><br/>
        <label>Search</label>
        <input type="text" name="" value={this.state.searchValue} onChange={this.onChangeSearch}/>
        <br/><br/><hr/><br/>{filteredArticles}
    	</div>
	    );
	  }

}
//====================================
export default Header;

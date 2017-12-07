import React from "react";
import ReactDOM from "react-dom";

//=================================================
function Gallery (props){

		return(
   <div>
    <div id="nav">
  		<div className="orange">
  		</div>
  		<h5 className="title"> Weather and News </h5>
  		<input type="text" name="" value={props.searchValue} onChange={props.onChangeSearch} className="recherche" placeholder="search here !"/>
  	</div>
	</div>

/////////////////////////////////////////////////////:::
		);

}

//=========================================
export default Gallery;

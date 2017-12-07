import React from "react";
import ReactDOM from "react-dom";

//=================================================
function Gallery (props){

		return(
   <div>
    <div id="nav">
  		<div className="orange">
  		</div>
  		<h5 className="title"> Profile Page</h5>
  		<input type="text" name="" value={props.searchValue} onChange={props.onChangeSearch} className="recherche" placeholder="search here !"/>
  	</div>
		<div id="left">

		</div>
		<div id="right">
			<div class="cercle"> 1</div>
			<div class="cercle"> 2</div>
			<div class="cercle"> 3</div>
			<div class="cercle"> 4</div>
			<div class="cercle"> 4</div>
			<div class="purple"></div>
	  </div>
	</div>

/////////////////////////////////////////////////////:::
      // <div classNameName="header">
      // <label>Search</label>
      // <input type="text" name="" value={props.searchValue} onChange={props.onChangeSearch}/>
      // </div>
		);

}

//=========================================
export default Gallery;

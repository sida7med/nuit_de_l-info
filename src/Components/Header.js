import React from "react";
import ReactDOM from "react-dom";
import gif from "./car.gif";

//=================================================
//Définir l'entete de l'application
function Gallery (props){

		return(
   <div>
	 <div id="nav">
	 <div className="orange">
		 <div className="logo"><img src={gif}></img></div>
	 </div>
	 <h5 className="title"> News</h5>

	 <input type="text" name="search" placeholder="Search Here !" className="recherche" value={props.searchValue} onChange={props.onChangeSearch}/>

	 <h4> Have a safe worry-free drive! </h4>

 </div>

 <div id="right">

	 <div className="purple">

	 </div>

 </div>
	</div>

/////////////////////////////////////////////////////:::
		);

}

//=========================================
export default Gallery;

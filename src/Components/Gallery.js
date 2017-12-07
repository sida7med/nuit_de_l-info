import React from "react";
import ReactDOM from "react-dom";

//=================================================
function Gallery (props){

		return(
			<div className="gallery">
      {props.articles}
			</div>
		);

}

//=========================================
export default Gallery;

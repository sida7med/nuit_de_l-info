import React from "react";
import ReactDOM from "react-dom";

//=================================================
function Gallery (props){

		return(
      <div>
    <div id="nav">
  		<div class="orange">
  		</div>
  		<h5 class="title"> Profile Page</h5>
  		<input type="text" name="" value={props.searchValue} onChange={props.onChangeSearch} className="recherche" placeholder="search here !"/>
  		<h5> find friends </h5>
  		<div class="login">

  			<div class="dropdown">
  	 			<span>User Login</span>
  	  			<div class="dropdown-content">
  	    			<p>Hello World!</p><br/>
  	    			<p>Hello World!</p><br/>
  	    			<p>Hello World!</p><br/>
  	    			<p>Hello World!</p><br/>
  	  			</div>
  			</div>
  		</div>

  	</div>
  	<div id="left">

  	</div>
  	<div id="right">
  		<div class="cercle">1 </div>
  		<div class="cercle"> 2</div>
  		<div class="cercle"> 3</div>
  		<div class="cercle"> 4</div>
  		<div class="cercle"> 4</div>
  		<div class="purple">

  		</div>

  	</div>
    </div>

/////////////////////////////////////////////////////:::
      // <div className="header">
      // <label>Search</label>
      // <input type="text" name="" value={props.searchValue} onChange={props.onChangeSearch}/>
      // </div>
		);

}

//=========================================
export default Gallery;

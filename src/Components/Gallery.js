import React from "react";
import ReactDOM from "react-dom";
import icon1 from "./img/cloudy.png";
import icon2 from "./img/chams.png";
import icon3 from "./img/cloudy-min.png";
import icon4 from "./img/msa7ba.png";
import icon5 from "./img/mtar.png";
import icon6 from "./img/r3ad.png";
import icon7 from "./img/snow.png";
import icon8 from "./img/wind.png";
//=================================================
function Gallery (props){

		return(
			<div className="middle">
				<div className="gallery1">
				<div className="ui-block-title">
						<h6 className="title">Widget Preview</h6>
					</div>
					<div className="sideWeather">
						<div className="temperature-sensor">
							<div className="temperature-degre">
								<span>64°</span>
							</div>
							<div className="max-min">
								<span>58°</span>
								<span>76°</span>
							</div>
						</div>
						<div className="bigIcon">
							<img src={icon1} width="80" height="80"></img>
						</div>
						<div className="wethear-description">
							<div className="climate">Partly Sunny</div>
							<span>Real Feel: <span>67°</span></span>
							<span>Chance of Rain: <span>49%</span></span>
						</div>
						<div className="weekly">
							<ul className="weekly-forecast">
								<li>
									<div className="day">sun</div>
									<img src={icon2} width="22" height="22"></img>
									<div className="temperature-sensor-day">60°</div>
								</li>

								<li>
									<div className="day">mon</div>
									<img src={icon3} width="22" height="22"></img>
									<div className="temperature-sensor-day">58°</div>
								</li>

								<li>
									<div className="day">tue</div>
									<img src={icon4} width="22" height="22"></img>
									<div className="temperature-sensor-day">67°</div>
								</li>

								<li>
									<div className="day">wed</div>
									<img src={icon5} width="22" height="22"></img>
									<div className="temperature-sensor-day">70°</div>
								</li>

								<li>
									<div className="day">thu</div>
									<img src={icon6} width="22" height="22"></img>
									<div className="temperature-sensor-day">58°</div>
								</li>

								<li>
									<div className="day">fri</div>
									<img src={icon7} width="22" height="22"></img>
									<div className="temperature-sensor-day">68°</div>
								</li>

								<li>
									<div className="day">sat</div>
									<img src={icon8} width="22" height="22"></img>
									<div className="temperature-sensor-day">65°</div>
								</li>
							</ul>
						</div>
						<div className="date-et-place">
							<h5 className="date">Saturday, March 26th</h5>
							<div className="place">San Francisco, CA</div>
						</div>
					</div>
				</div>
				<div className="gallery2">
					{props.articles}
				</div>
			</div>
		);

}

//=========================================
export default Gallery;

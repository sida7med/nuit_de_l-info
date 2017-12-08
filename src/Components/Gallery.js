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
				<div class="ui-block-title">
						<h6 class="title">Widget Preview</h6>
					</div>
					<div class="sideWeather">
						<div class="temperature-sensor">
							<div class="temperature-degre">
								<span>64°</span>
							</div>
							<div class="max-min">
								<span>58°</span>
								<span>76°</span>
							</div>
						</div>
						<div class="bigIcon">
							<img src={icon1} width="80" height="80"></img>
						</div>
						<div class="wethear-description">
							<div class="climate">Partly Sunny</div>
							<span>Real Feel: <span>67°</span></span>
							<span>Chance of Rain: <span>49%</span></span>
						</div>
						<div class="weekly">
							<ul class="weekly-forecast">
								<li>
									<div class="day">sun</div>
									<img src={icon2} width="22" height="22"></img>
									<div class="temperature-sensor-day">60°</div>
								</li>

								<li>
									<div class="day">mon</div>
									<img src={icon3} width="22" height="22"></img>
									<div class="temperature-sensor-day">58°</div>
								</li>

								<li>
									<div class="day">tue</div>
									<img src={icon4} width="22" height="22"></img>
									<div class="temperature-sensor-day">67°</div>
								</li>

								<li>
									<div class="day">wed</div>
									<img src={icon5} width="22" height="22"></img>
									<div class="temperature-sensor-day">70°</div>
								</li>

								<li>
									<div class="day">thu</div>
									<img src={icon6} width="22" height="22"></img>
									<div class="temperature-sensor-day">58°</div>
								</li>

								<li>
									<div class="day">fri</div>
									<img src={icon7} width="22" height="22"></img>
									<div class="temperature-sensor-day">68°</div>
								</li>

								<li>
									<div class="day">sat</div>
									<img src={icon8} width="22" height="22"></img>
									<div class="temperature-sensor-day">65°</div>
								</li>
							</ul>
						</div>
						<div class="date-et-place">
							<h5 class="date">Saturday, March 26th</h5>
							<div class="place">San Francisco, CA</div>
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

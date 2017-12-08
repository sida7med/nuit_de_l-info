import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Corp from './Components/Corp';
import './App.css';
const articles = [
  {
    _id:40,
    id: "1",
    title: "Building Collapse",
    photo: "https://i2-prod.liverpoolecho.co.uk/incoming/article9908082.ece/ALTERNATES/s615/building.jpg",
    details: "the wolf building has collapsed at 8:00 am today and ...",
    location: "Sousse",
    category: "Danger"
  },
  {
    _id:10,
    id: "2",
    title: "Crash",
    photo: "https://cdn.citylab.com/media/img/citylab/2015/09/shutterstock_250536799/facebook.jpg?1494536976",
    details: "Crash at 21 jumpstreet ...",
    location: "Monastir",
    category: "Danger"
  },
  {
    _id:20,
    id: "3",
    title: "Traffic jam",
    photo: "http://inrix.com/wp-content/uploads/2016/11/bigstock-137899067-1250x750.jpg",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit ...",
    location: "Sousse",
    category: "normal"
  },
  {
    _id:30,
    id: "4",
    title: "Manifestation",
    photo: "http://lvdnena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2016/11/13/node_73471/14349398/public/afp/2016/11/13/10/8b03da9408f9d692d498db526d8c63092d468446.jpg?itok=t71H35B3",
    details: "the wolf building has collapsed at 8:00 am today and ...",
    location: "Monastir",
    category: "Danger"
  }
];

const weather = [
  {
    _id:0,
    id: "1",
    location: "Sousse",
    temp: "69 °F",
    low: "57",
    high: "67",
    feel: "Partly Sunny",
    realFeel: "67",
    chanceRain: "15%",
    windSpeed: "20 MPH"
  },
  {
    _id:1,
    id: "2",
    location: "Monastir",
    temp: "60 °F",
    low: "52",
    high: "63",
    feel: "Cloudy",
    realFeel: "63",
    chanceRain: "45%",
    windSpeed: "40 MPH"
  }
];
// données fictives

class App extends Component { //compsant parent
  render() {
    return (
      <div>
        <h1> App Component </h1>
        <Corp articles={articles} weather={weather}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Corp from './Components/Corp';
import './App.css';
const articles = [
  {
    id: "1",
    title: "Building Collapse",
    photo: "https://i2-prod.liverpoolecho.co.uk/incoming/article9908082.ece/ALTERNATES/s615/building.jpg",
    details: "the wolf building has collapsed at 8:00 am today and ...",
    location: "Sousse",
    category: "Danger"
  },
  {
    id: "2",
    title: "Crash",
    photo: "https://cdn.citylab.com/media/img/citylab/2015/09/shutterstock_250536799/facebook.jpg?1494536976",
    details: "Crash at 21 jumpstreet ...",
    location: "Monastir",
    category: "Danger"
  },
  {
    id: "3",
    title: "Traffic jam",
    photo: "http://inrix.com/wp-content/uploads/2016/11/bigstock-137899067-1250x750.jpg",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit ...",
    location: "Sousse",
    category: "normal"
  },
  {
    id: "4",
    title: "Manifestation",
    photo: "http://lvdnena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2016/11/13/node_73471/14349398/public/afp/2016/11/13/10/8b03da9408f9d692d498db526d8c63092d468446.jpg?itok=t71H35B3",
    details: "the wolf building has collapsed at 8:00 am today and ...",
    location: "Monastir",
    category: "Danger"
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <h1> App Component </h1>
        <Corp articles={articles}/>
      </div>
    );
  }
}

export default App;

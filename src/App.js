import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Header from './Components/Header';
import './App.css';
const articles = [
  {
    id: "1",
    title: "Building Collapse",
    photo: "picture",
    details: "the wolf building has collapsed at 8:00 am today and ...",
    location: "Sousse",
    category: "Danger"
  },
  {
    id: "2",
    title: "Crash",
    photo: "picture",
    details: "Crash at 21 jumpstreet ...",
    location: "Monastir",
    category: "Danger"
  },
  {
    id: "3",
    title: "Traffic jam",
    photo: "picture",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit ...",
    location: "Sousse",
    category: "normal"
  },
  {
    id: "4",
    title: "Building Collapse",
    photo: "picture",
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
        <Header articles={articles}/>
      </div>
    );
  }
}

export default App;

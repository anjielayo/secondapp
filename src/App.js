// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NumberCounter from "./components/NumberCounter";
import Card from './components/Card';
import './App.css'

function App() {
  //Using useEffect() hook

  /*useEffect(() => {
   alert("Welcome to Sidehustle")
 }, [])*/

  //

  //transforming JSON TO JS Objects and vice versa
  /*const userJSONData = `{
          "name": "Alex C",
          "age": 2,
          "city": "Houston"
    }`;

    const userObj = JSON.parse(userJSONData);
    console.log(userObj);
    console.log(userJSONData);
    console.log(JSON.stringify(userObj))*/
  //

  //fetching APIs
  /*const fetchPost = async() =>{
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      ).then(response=>response.json())
      console.log(response)
    }

      fetchPost();*/
  //



  return (
    <div className="App">
      

      {/*working with Router to link webpages together*/}
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
      {/**/}
      <NumberCounter></NumberCounter>
      <Card />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h2>Quicksort algorithm</h2>
            <code><pre>
                {`var array = [];
for (var i = 0; i < 100000;i++){
	array.push(Number.parseFloat((Math.random()*100).toFixed(2)));
}


function jsSort(array){
	array = array.slice()
  var before = Date.now()
  array.sort();
  return (Date.now() - before);
}


var jsSortTimesArray = [];
for(var i = 0; i < 1000;i++){
	jsSortTimesArray.push(jsSort(array));
}

var sumTime = jsSortTimesArray.reduce(function(prev,current){
	return prev+current
},0)

var avgTime = sumTime/jsSortTimesArray.length
console.log(avgTime);`}
            </pre></code>

        </p>
      </div>
    );
  }
}

export default App;

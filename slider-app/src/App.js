import './App.css';
import Slider from "./Companent/Slider/Slider";


import slide1 from "../src/img/catalogNum1.jpg"
import slide2 from "../src/img/catalogNum2.jpg"
import slide3 from "../src/img/catalogNum3.jpg"
import slide4 from "../src/img/catalogNum4.jpg"
import slide5 from "../src/img/catalogNum5.jpg"


function App() {
    const slides = [
        {url: slide1},
        {url: slide2},
        {url: slide3},
        {url: slide4},
        {url: slide5},
    ];

    const containerStyle = {
        width: '650px',
        height: '650px',
        margin: '0 auto',
    };


  return (
    <div className="App">
        <div style={containerStyle}>
   <Slider slides={slides}/>
        </div>
    </div>
  );
}

export default App;

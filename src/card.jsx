import React, { useEffect, useRef } from 'react';
import './styles.css';
import VanillaTilt from 'vanilla-tilt';
import ProgressBar from "@ramonak/react-progress-bar";
import 'react-calendar/dist/Calendar.css';
import Calendar from './Calender';
import { ForkLeft, Padding, WidthFull } from '@mui/icons-material';


function Card() {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);

  useEffect(() => {
    VanillaTilt.init(cardRef1.current, {
      glare: true,
      reverse: true,
      "max-glare": 0.5
    });
  }, []);

  useEffect(() => {
    VanillaTilt.init(cardRef2.current, {
      glare: true,
      reverse: true,
      "max-glare": 0.2
    });
  }, []);

  return (
    <> 
  <h1 style={{ textAlign: "center", color: "white", fontSize: "40px",  width:"50%", marginLeft:"25%" }}>Performance Analysis</h1>
      <body>
        <div ref={cardRef1} className="card rgb">
          <div className="card-image"></div>
          <div className="card-text">
            <h1><center>Javascript</center></h1> 
            <h3>Yours course completion details is here kindly click for more info.</h3>
            <br />
            <ProgressBar completed={50} bgColor="linear-gradient(to right, orange,red)" animateOnRender={true}/>
            <button className="info-button">Full Info</button>
          </div>
        </div>
       
        <div ref={cardRef2} className="card rgb">
          <div className="card-image card2"></div>
          <div className="card-text card2">
            <h1><center>Python</center></h1> 
            <h3>Yours course completion details is here kindly click for more info.</h3>
            <br />
            <ProgressBar completed={30} bgColor="linear-gradient(to right, orange,red)" animateOnRender={true} />
            <button className="info-button">Full Info</button>
          </div>
        </div>
      </body> 
         <body>
         <h1 style={{color:"white", paddingLeft:"100px"}}>Your current streak ! ! &#x1F601;</h1>
         <Calendar />
         </body>
       
    
      
      
    </>
  );
}

export default Card;
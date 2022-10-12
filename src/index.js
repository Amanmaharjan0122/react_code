// import React from 'react';
// import ReactDOM from 'react-dom';

// const fname = "aman";
// const lname = "maharjans";

// ReactDOM.render(

//   <>
//     <h1>{`my name is ${fname} ${lname}`}</h1>
//   </>,

//   document.getElementById('root')
// );


// ------Display Current Date and Time in JSX in React JS -----

// import React from 'react';
// import ReactDOM from 'react-dom';

// const name = "aman";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>  
//   <h1>hello, my name is {name}</h1>
//   <p>current date is = {currDate}</p>
//   <p>current time is = {currTime}</p>

//   </>,
//   document.getElementById('root')

// );




// --------JSX Attributes in ReactJS /// and inline css-------
// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// const name = 'aman'
// const img = "https://picsum.photos/200/300"
// const img1 = "https://picsum.photos/400/300"
// const img2 = "https://picsum.photos/300/300"
// const links = "https://www.pexels.com/"

// const heading ={
//     color: "burlywood",
//     textAlign: "center",
//     textTransform: "capitalize",
//     margin: "50px 0",
//     fontFamily: "'Poppins', sans-serif"

    
// }

// ReactDOM.render(
//     <>
//     <h1 style={heading} > my name is {name}</h1>
//     <div className="img_div">
//     <img src={img} alt="randomimages" />
//     <img src={img1} alt="randomimages" />
//     <a href={links} target="blank">
//     <img src={img2} alt="randomimages" />
//     </a>
//     </div>
//     </>,
//     document.getElementById('root')


// );



// -------Creating Simple Greeting Website using React JS------
// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// let curDate = new Date();
// curDate = curDate.getHours();
// let greetings = '';
// const cssStyle = {};


// if (curDate >= 1 && curDate <=12) {
//     greetings = 'good morning';  
//     cssStyle.color = 'green';  
// } else if (curDate  >=12 && curDate <=19) {
//     greetings = 'good afternoon';
//     cssStyle.color = 'orange';  
// } else {
//     greetings = 'good night';
//     cssStyle.color = 'dark';  

// }

 
// ReactDOM.render (
//     <>
//     <div>
//     <h1>hello, sir <span style={cssStyle}>{greetings}</span></h1>
//     </div>


//     </>
//     ,document.getElementById("root")
// );




// -----components in react----------??

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
<App />,document.getElementById('root')

);
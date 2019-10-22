import React from 'react'
import { Link } from 'react-router-dom';
import minionHome from '../minionHome.png';
import pirate from '../pirate-home.png';
import chefHome from '../chefHome.png';
import chefHome2 from '../chefHome2.png'


export default function Home() {
  return (
    <div id="container">
      <div id="welcome"><h1>Welcome to a Fun Translation!</h1></div>
      <div id="home-div">
        <div id="pirate-home">
          <Link to="/pirate">
            <img src={pirate} />
          </Link>
        </div>

        <div id="chef-home">
          <Link to="/chef">
            <img src={chefHome} />
          </Link>
        </div>

        <div id="minion-home">
          <Link to="/minion">
            <img src={minionHome} />
          </Link>
        </div>
      </div>
      <div id="instructions">Click on one of the cards to retreive a fun translation of any text in Pirate speak, the accent of the Sweedish Chef or Minion language.</div>
    </div>
  )
}



// export default function Home() {
//   return (
//     <div id="home-div">
//       <div id="pirate-home">
//         <Link to="/pirate">
//           <img src={pirate} />
//         </Link>
//       </div>

//       <div id="chef-home">
//         <img src={chefHome} />
//       </div>

//       <div id="minion-home">
//         <Link to="/minion">
//           <img src={minionHome} />
//         </Link>
//       </div>
//     </div>
//   )
// }
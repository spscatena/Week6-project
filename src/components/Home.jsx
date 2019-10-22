import React from 'react'
import { Link } from 'react-router-dom';
import imgMinion from '../minion1.png';



export default function Home() {
  return (
    <div id="home-div">

      <div id="pirate-home">
        <Link to="/pirate">
          <img src={imgMinion} />
        </Link>
      </div>

      <div id="chef-home">
        <img src="https://vignette.wikia.nocookie.net/muppet/images/c/c9/SC_169.jpg/revision/latest/scale-to-width-down/300?cb=20180407180306" />
      </div>


      <div id="minion-home">
        <Link to="/minion">
          <img src="https://cdn.clipart.email/fef41ed77c15fb5fb564446a37e9c2ad_28-collection-of-minion-clipart-no-background-high-quality-_236-406.jpeg" />
        </Link>
      </div>
    </div>
  )
}


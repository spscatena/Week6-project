import React from 'react'
import { Link } from 'react-router-dom'


export default function ChefPage(props) {
  return (
    <div id="chefForm">
      <form onSubmit={props.handleSubmit}>
        <h2>Chef Page Translation</h2>
        <textarea onChange={props.handleChange} name="userInput" type="text" placeholder="To be Translated" ></textarea>
        <input type="submit" value="Get Translation!" />
      </form>
      <h3>{props.chefMessage}</h3>
    </div>
  )
}


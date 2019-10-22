import React from 'react'


export default function MinionPage(props) {
  return (
    <div id="minionForm">
      <form onSubmit={props.handleSubmit}>
        <div id="minionTitle">
          <h2>Minion Page Translation</h2>
        </div>
        <div>
          <textarea onChange={props.handleChange} name="userInput" type="text" placeholder="To be Translated" ></textarea>
        </div>
        <div>
          <input type="submit" value="Get Translation!" />
        </div>
        <div>
          <h3>{props.minionMessage}</h3>
        </div>
      </form>
    </div>
  )
}





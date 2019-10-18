import React from 'react'
import axios from 'axios'

export const pirateTranslation = async () => {
  const apiKey = "oCo_UkNzriWDG3X4progEgeF"
  const headers = { "X-Funtranslations-Api-Secret": apiKey }
  
  const response = await axios.post(`https://cors-anywhere.herokuapp.com/https://api.funtranslations.com/translate/pirate.json`,
    { text: "I just love the smell of the ocean" }, { headers: headers });
  debugger;
  console.log(response)
  return response
}




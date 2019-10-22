import React from 'react'
import axios from 'axios'

export const pirateTranslation = async (userInput) => {
  const apiKey = "oCo_UkNzriWDG3X4progEgeF"
  const headers = { "X-Funtranslations-Api-Secret": apiKey }
  const response = await axios.post(`https://cors-anywhere.herokuapp.com/https://api.funtranslations.com/translate/pirate.json`,
    { text: userInput }, { headers: headers });
  console.log(response)
  return response
}


export const chefTranslation = async (userInput) => {
  const apiKey = "_pGdApPXdaYPz69S379WWweF"
  const headers = { "X-Funtranslations-Api-Secret": apiKey }
  const response = await axios.post(`https://cors-anywhere.herokuapp.com/https://api.funtranslations.com/translate/chef.json`,
    { text: userInput }, { headers: headers });
  console.log(response)
  return response
}



export const minionTranslation = async (userInput) => {
  const apiKey = "XWqJ_ruAxXIWJfpGNR_zBweF"
  const headers = { "X-Funtranslations-Api-Secret": apiKey }
  const response = await axios.post(`https://cors-anywhere.herokuapp.com/https://api.funtranslations.com/translate/minion.json`,
    { text: userInput }, { headers: headers });
  console.log(response)
  return response
}

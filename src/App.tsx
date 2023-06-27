import { Previsao } from "./components/previsao/previsao"
import { Pesquisar } from "./components/pesquisar/pesquisar"
import { useState, useEffect } from "react"
import axios from 'axios';

export function App() {

  const [nomeCidade, setNomeCidade] = useState('')

  useEffect(() => {
    async function buscandoNaAPI() {
      // const urlAPI = `9f74383adba6e40a4e2c23595a7265fa ${nomeCidade}`
      const urlAPI = `http://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&appid=9f74383adba6e40a4e2c23595a7265fa`
      const jsonAPI = await axios.get(urlAPI).then(e => e.data)
      console.log(jsonAPI)
    }

    buscandoNaAPI()
  }, [nomeCidade])

  return (
    <div className="container">
      <div className="mini-container"><Previsao/></div>
      <div className="mini-container"> <Pesquisar setNomeCidade={setNomeCidade}></Pesquisar> </div>
    </div>
  )
}

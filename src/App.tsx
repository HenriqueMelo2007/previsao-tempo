import { Previsao } from "./components/previsao/previsao"
import { Pesquisar } from "./components/pesquisar/pesquisar"
import { useState } from "react"
import axios from 'axios';

export function App() {

  const [nomeCidade, setNomeCidade] = useState('')

  
  async function buscandoNaAPI() {
    const keyAPI = '9f74383adba6e40a4e2c23595a7265fa'
      
    const urlAPI = `http://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&appid=${keyAPI}&units=metric&lang=pt_br`
    const jsonAPI = await axios.get(urlAPI).then(Response => Response.data)
    console.log(jsonAPI)
  }

  return (
    <div className="container">
      <div className="mini-container"> <Pesquisar setNomeCidade={setNomeCidade} buscandoNaAPI={buscandoNaAPI}></Pesquisar> </div>
      <div className="mini-container"><Previsao/></div>
    </div>
  )
}

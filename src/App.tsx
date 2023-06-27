import { Previsao } from "./components/previsao/previsao"
import { Pesquisar } from "./components/pesquisar/pesquisar"
import { Capitais } from "./components/capitais/capitais"
import { useState, useEffect } from "react"
import axios from 'axios';

export function App() {

  const [nomeCidade, setNomeCidade] = useState('')

  useEffect(() => {
    async function buscandoNaAPI() {
      const urlAPI = `${nomeCidade}`
      const jsonAPI = await axios.get(urlAPI)
      console.log(jsonAPI)
    }

    buscandoNaAPI()
  }, [nomeCidade])

  return (
    <div className="container">
      <div className="mini-container"><Previsao/></div>
      <div className="mini-container"> <Pesquisar setNomeCidade={setNomeCidade}></Pesquisar> </div>
      <div className="mini-container"><Capitais/></div>
    </div>
  )
}

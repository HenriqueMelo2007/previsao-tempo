import { Previsao } from "./components/previsao/previsao"
import { Pesquisar } from "./components/pesquisar/pesquisar"
import { useState } from "react"
import axios from 'axios';

export function App() {

  const [nomeCidade, setNomeCidade] = useState('')

  const [pesquisaFeita, setPesquisaFeita] = useState(false)

  const [nomeCidadeEscolhida, setNomeCidadeEscolhida] = useState('')
  const [pais, setPais] = useState('')
  const [temperatura, setTemperatura] = useState('')
  const [sensacao, setSensacao] = useState('')
  const [tempMin, setTempMin] = useState('')
  const [tempMax, setTempMax] = useState('')
  const [descricao, setDescricao] = useState('')
  const [umidade, setUmidade] = useState('')
  const [velocidadeVento, setVelocidadeVento] = useState('')

  function atribuindoValores (jsonAPI) {
    setPesquisaFeita(true)
    setNomeCidadeEscolhida(jsonAPI.name)
    setPais(jsonAPI.sys.country)
    setTemperatura(jsonAPI.main.temp)
    setSensacao(jsonAPI.main.feels_like)
    setTempMin(jsonAPI.main.temp_min)
    setTempMax(jsonAPI.main.temp_max)
    setDescricao(jsonAPI.weather[0].description)
    setUmidade(jsonAPI.main.humidity)
    setVelocidadeVento(jsonAPI.wind.speed)
  }

  
  async function buscandoNaAPI() {
    const keyAPI = '9f74383adba6e40a4e2c23595a7265fa'
      
    const urlAPI = `http://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&appid=${keyAPI}&units=metric&lang=pt_br`
    const jsonAPI = await axios.get(urlAPI).then(Response => Response.data)

    console.log(jsonAPI)
    
    atribuindoValores(jsonAPI)
  }

  return (
    <div className="container">
      <div className="mini-container"> <Pesquisar setNomeCidade={setNomeCidade} buscandoNaAPI={buscandoNaAPI}></Pesquisar> </div>
      <div className="mini-container"><Previsao pesquisaFeita={pesquisaFeita} nomeCidadeEscolhida={nomeCidadeEscolhida} pais={pais} temperatura={temperatura} descricao={descricao} tempMin={tempMin} tempMax={tempMax} sensacao={sensacao} umidade={umidade} velocidadeVento={velocidadeVento} /></div>
    </div>
  )
}

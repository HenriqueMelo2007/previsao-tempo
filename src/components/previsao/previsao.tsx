import { PesquisePorPrevisao } from './pesquiseporprevisao'
import './previsao.css'
import { ResultadoPrevisao } from './resultadoprevisao'

interface propsPrevisao {
  pesquisaFeita: boolean,
  nomeCidadeEscolhida: string,
  pais: string,
  temperatura: string, 
  sensacao: string, 
  tempMin: string, 
  tempMax: string, 
  descricao: string, 
  umidade: string, 
  velocidadeVento: string,
}

export function Previsao({pesquisaFeita, nomeCidadeEscolhida, pais, temperatura, sensacao, tempMin, tempMax, descricao, umidade, velocidadeVento}:propsPrevisao) {
  return (
    <div className="previsao">

      {pesquisaFeita ? <ResultadoPrevisao nomeCidadeEscolhida={nomeCidadeEscolhida} pais={pais} temperatura={temperatura} sensacao={sensacao} tempMin={tempMin} tempMax={tempMax} descricao={descricao} umidade={umidade} velocidadeVento={velocidadeVento} /> : <PesquisePorPrevisao/>}


      
    </div>
  )
}
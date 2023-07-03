import './previsao.css'
import { ResultadoPrevisao } from './resultadoprevisao'

type propsPrevisao = {
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

export function Previsao({nomeCidadeEscolhida, pais, temperatura, sensacao, tempMin, tempMax, descricao, umidade, velocidadeVento}:propsPrevisao) {
  return (
    <div className="previsao">
      <ResultadoPrevisao nomeCidadeEscolhida={nomeCidadeEscolhida} pais={pais} temperatura={temperatura} sensacao={sensacao} tempMin={tempMin} tempMax={tempMax} descricao={descricao} umidade={umidade} velocidadeVento={velocidadeVento} />
    </div>
  )
}
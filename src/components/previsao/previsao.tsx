import './previsao.css'
import { ResultadoPrevisao } from './resultadoprevisao'

export function Previsao() {
  return (
    <div className="previsao">
      <h1>Previsão do tempo</h1>
      <ResultadoPrevisao/>
    </div>
  )
}
import { Previsao } from "./components/previsao/previsao"
import { Pesquisar } from "./components/pesquisar/pesquisar"
import { Capitais } from "./components/capitais/capitais"

export function App() {

  console.log('olá')

  return (
    <div className="container">
      <div className="mini-container"><Previsao/></div>
      <div className="mini-container"><Pesquisar/></div>
      <div className="mini-container"><Capitais/></div>
    </div>
  )
}

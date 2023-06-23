import { Previsao } from "./components/previsao/previsao"
import { Pesquisar } from "./components/pesquisar/pesquisar"
import { Capitais } from "./components/capitais/capitais"

export function App() {

  return (
    <div className="container">
      <Previsao/>
      <Pesquisar/>
      <Capitais/>
    </div>
  )
}
